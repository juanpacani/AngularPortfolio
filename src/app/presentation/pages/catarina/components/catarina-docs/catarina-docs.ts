import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewContainerRef, ComponentRef, ApplicationRef, Injector, createComponent, EnvironmentInjector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MarkdownProcessor } from '../../../../../core/utilities/markdown-processor';
import { Translate } from '../../../../../core/utilities/translate/translate';
import { DeviceService } from '../../../../../core/services/device-service';
import { Button, Card, Drawer, Icon } from 'catarina';
import { CodeConsole } from '../docs-examples/code-console/code-console';
import { getExampleComponent } from '../docs-examples/example-components/example-components.registry';

interface SectionItem {
  title: string;
  path: string;
}

interface Section {
  title: string;
  path?: string;
  group?: string;
  items?: SectionItem[];
}

interface IndexData {
  sections: Section[];
}

@Component({
  selector: 'app-catarina-docs',
  imports: [CommonModule, Drawer, Button, Card],
  templateUrl: './catarina-docs.html',
  styleUrl: './catarina-docs.scss'
})
export class CatarinaDocs implements OnInit, OnDestroy, AfterViewInit {
  content: string = '';
  renderedContent: SafeHtml = '';
  indexData: IndexData | null = null;
  currentLang: string = '';
  currentDoc: string = '';
  private isInitialized: boolean = false;
  show404: boolean = false;

  drawerActive: boolean = false;
  
  @ViewChild('markdownContent', { read: ElementRef }) markdownContent!: ElementRef;
  
  private routeSubscription?: Subscription;
  private languageSubscription?: Subscription;
  private exampleComponentRefs: Map<HTMLElement, ComponentRef<CodeConsole>> = new Map();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private translate: Translate,
    public deviceService: DeviceService,
    private appRef: ApplicationRef,
    private injector: Injector,
    private environmentInjector: EnvironmentInjector,
  ) {}

  ngOnInit() {
    // Obtener el idioma inicial del servicio
    const initialLang = this.convertLangToRoute(this.translate.actualLanguage);
    
    // Suscribirse a los cambios de parámetros de la ruta
    this.routeSubscription = this.route.params.subscribe(params => {
      const doc = params['doc'] || 'get-started';
      const routeLang = params['lang'];
      
      // Si hay idioma en la ruta, actualizar y cargar
      if (routeLang) {
        // Cargar si es la primera vez o si el idioma/documento cambió
        const shouldLoad: boolean = !this.isInitialized || 
                          this.currentLang !== routeLang || 
                          this.currentDoc !== doc;
        
        if (shouldLoad) {
          this.currentLang = routeLang;
          this.currentDoc = doc;
          this.isInitialized = true;
          this.loadIndex(routeLang);
        }
      } else {
        // Si no hay idioma en la ruta, usar el idioma del servicio y redirigir
        this.currentDoc = doc;
        this.currentLang = initialLang;
        this.router.navigate(['/catarina', doc, initialLang], { replaceUrl: true });
      }
    });

    this.languageSubscription = this.translate.language$.subscribe(lang => {
      const newLang = this.convertLangToRoute(lang);
      const currentRouteLang = this.route.snapshot.params['lang'];
      
      if (currentRouteLang && currentRouteLang !== newLang && this.currentDoc) {
        // Actualizar la ruta con el nuevo idioma manteniendo el mismo documento
        this.router.navigate(['/catarina', this.currentDoc, newLang], { replaceUrl: true });
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
    this.languageSubscription?.unsubscribe();
    this.clearExampleComponents();
  }

  convertLangToRoute(lang: string): string {
    return lang.toLowerCase();
  }

  loadIndex(lang: string) {
    this.http.get<IndexData>(`/documentation/${lang}/_index.json`)
      .subscribe({
        next: (data) => {
          this.indexData = data;
          // Una vez cargado el índice, cargar el documento con el path correcto
          this.loadDocument(this.currentDoc, this.currentLang);
        },
        error: (error) => {
          console.error('Error loading index:', error);
          // Intentar cargar el documento de todas formas con fallback
          this.loadDocument(this.currentDoc, this.currentLang);
        }
      });
  }

  loadDocument(doc: string, lang: string) {
    // Verificar si el documento existe en el índice
    if (!this.documentExists(doc)) {
      console.error(`Document not found: ${doc}`);
      console.error('Available documents:', this.getAvailableDocuments());
      this.show404 = true;
      return;
    }

    // Extraer el nombre del archivo sin extensión y la ruta
    const docPath: string = this.getDocPath(doc, lang);
    
    // Limpiar componentes de ejemplo anteriores
    this.clearExampleComponents();
    
    this.http.get(docPath, { responseType: 'text' })
      .subscribe({
        next: (markdown) => {
          this.show404 = false;
          this.content = markdown;
          // Procesar markdown a HTML y marcar como seguro
          const html = MarkdownProcessor.process(markdown);
          this.renderedContent = this.sanitizer.bypassSecurityTrustHtml(html);
          
          // Procesar placeholders de ejemplo después de un pequeño delay para que el DOM se actualice
          setTimeout(() => this.processExamplePlaceholders(), 0);
        },
        error: (error) => {
          console.error('Error loading document:', error);
          console.error('Attempted path:', docPath);
          console.error('Document:', doc, 'Language:', lang);
          // Mostrar 404 en lugar de error
          this.show404 = true;
        }
      });
  }

  ngAfterViewInit() {
    // Procesar placeholders después de que la vista se inicialice
    setTimeout(() => this.processExamplePlaceholders(), 0);
  }

  private processExamplePlaceholders() {
    // Verificar que estamos en el navegador (no en SSR)
    if (typeof document === 'undefined') return;
    if (!this.markdownContent?.nativeElement) return;

    const placeholders = this.markdownContent.nativeElement.querySelectorAll('.example-placeholder');
    
    placeholders.forEach((placeholder: HTMLElement) => {
      const exampleName = placeholder.getAttribute('data-example-name');
      if (!exampleName) return;

      const exampleComponent = getExampleComponent(exampleName);
      if (!exampleComponent) {
        console.warn(`Example component not found: ${exampleName}`);
        placeholder.innerHTML = `<p style="color: red;">Example "${exampleName}" not found</p>`;
        return;
      }

      // Crear un contenedor para el CodeConsole
      const container = document.createElement('div');
      placeholder.parentNode?.replaceChild(container, placeholder);

      // Crear el componente CodeConsole dinámicamente
      // Necesitamos usar ViewContainerRef, pero como estamos en un contexto de innerHTML,
      // usaremos una aproximación diferente: crear el componente directamente
      this.createCodeConsoleComponent(container, exampleComponent);
    });
  }

  private createCodeConsoleComponent(container: HTMLElement, exampleComponent: any) {
    // Crear el componente CodeConsole usando createComponent
    const componentRef = createComponent(CodeConsole, {
      hostElement: container,
      environmentInjector: this.environmentInjector,
      elementInjector: this.injector,
    });

    // Establecer el input del componente
    componentRef.setInput('component', exampleComponent);

    // Adjuntar la vista al árbol de componentes
    this.appRef.attachView(componentRef.hostView);

    // Guardar la referencia para poder destruirla después
    this.exampleComponentRefs.set(container, componentRef);
  }

  private clearExampleComponents() {
    this.exampleComponentRefs.forEach((componentRef, container) => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    });
    this.exampleComponentRefs.clear();
  }

  getDocPath(doc: string, lang: string): string {
    // Busca el path en el índex (_index.json)
    if (this.indexData) {
      for (const section of this.indexData.sections) {
        // Buscar en items simples
        if (section.path) {
          const sectionDoc = this.extractDocName(section.path);
          if (sectionDoc === doc) {
            // Agregar el sufijo de idioma al path
            const pathWithLang = this.addLangSuffix(section.path, lang);
            return `/documentation/${pathWithLang}`;
          }
        }
        
        // Buscar en grupos
        if (section.items) {
          for (const item of section.items) {
            const itemDoc = this.extractDocName(item.path);
            if (itemDoc === doc) {
              // Agregar el sufijo de idioma al path
              const pathWithLang = this.addLangSuffix(item.path, lang);
              return `/documentation/${pathWithLang}`;
            }
          }
        }
      }
    }
    
    // Fallback: intentar cargar directamente con sufijo de idioma
    return `/documentation/${doc}-${lang}.md`;
  }

  addLangSuffix(path: string, lang: string): string {
    /* Agregar el sufijo de idioma antes de la extensión .md
    Ej: "button.md" -> "button-es.md" */
    return path.replace('.md', `-${lang}.md`);
  }

  extractDocName(path: string): string {
    /* Extrae el nombre del documento de la ruta en el _index.json sin la extensión .md
    Ej: "get-started.md" -> "get-started" */
    const withoutExt = path.replace('.md', '');
    const parts = withoutExt.split('/');
    return parts[parts.length - 1];
  }

  navigateToDoc(path: string, lang: string) {
    // Extraer el nombre del documento de la ruta para la navegación
    const docName = this.extractDocName(path);
    this.router.navigate(['/catarina', docName, lang]);
  }

  isActive(path: string): boolean {
    const docName = this.extractDocName(path);
    return docName === this.currentDoc;
  }

  openDrawer() {
    this.drawerActive = true;
  }

  closeDrawer() {
    this.drawerActive = false;
  }

  toCatarinaGithub() {
    window.open('https://github.com/Hydenaky/library-workspace', '_blank');
  }

  /**
   * Verifica si un documento existe en el índice
   */
  private documentExists(doc: string): boolean {
    if (!this.indexData) return false;

    for (const section of this.indexData.sections) {
      // Buscar en items simples
      if (section.path) {
        const sectionDoc = this.extractDocName(section.path);
        if (sectionDoc === doc) {
          return true;
        }
      }
      
      // Buscar en grupos
      if (section.items) {
        for (const item of section.items) {
          const itemDoc = this.extractDocName(item.path);
          if (itemDoc === doc) {
            return true;
          }
        }
      }
    }
    
    return false;
  }

  /**
   * Obtiene la lista de documentos disponibles (para debugging)
   */
  private getAvailableDocuments(): string[] {
    const documents: string[] = [];
    
    if (!this.indexData) return documents;

    for (const section of this.indexData.sections) {
      if (section.path) {
        documents.push(this.extractDocName(section.path));
      }
      if (section.items) {
        for (const item of section.items) {
          documents.push(this.extractDocName(item.path));
        }
      }
    }
    
    return documents;
  }

  /**
   * Navega a get-started con el idioma actual
   */
  navigateToGetStarted() {
    this.router.navigate(['/catarina', 'get-started', this.currentLang]);
  }
}