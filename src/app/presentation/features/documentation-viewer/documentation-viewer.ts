import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ComponentRef, ApplicationRef, Injector, createComponent, EnvironmentInjector, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MarkdownProcessor } from '../../../core/utilities/markdown-processor';
import { Translate } from '../../../core/utilities/translate/translate';
import { DeviceService } from '../../../core/services/device-service';
import { Button, Drawer } from 'catarina';
import { CodeConsole } from '../../pages/catarina/components/docs-examples/code-console/code-console';
import { getExampleComponent } from '../../pages/catarina/components/docs-examples/example-components/example-components.registry';

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
  selector: 'app-documentation-viewer',
  imports: [CommonModule, Drawer, Button],
  templateUrl: './documentation-viewer.html',
  styleUrl: './documentation-viewer.scss'
})
export class DocumentationViewer implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() indexPath!: string; // Ruta al archivo _index.json (ej: '/documentation/catarina/es/_index.json')
  @Input() showIndex: boolean = true; // Mostrar aside con índice (por defecto true)
  @Input() initialDoc?: string; // Documento inicial a cargar (opcional)
  @Input() onNavigate?: (path: string, lang: string) => void; // Callback para navegación personalizada
  @Input() scrolleableMain: boolean = true;

  content: string = '';
  renderedContent: SafeHtml = '';
  indexData: IndexData | null = null;
  currentLang: string = '';
  currentDoc: string = '';
  private isInitialized: boolean = false;
  show404: boolean = false;

  drawerActive: boolean = false;
  
  @ViewChild('markdownContent', { read: ElementRef }) markdownContent!: ElementRef;
  
  private languageSubscription?: Subscription;
  private exampleComponentRefs: Map<HTMLElement, ComponentRef<CodeConsole>> = new Map();

  constructor(
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
    this.currentLang = this.convertLangToRoute(this.translate.actualLanguage);
    
    // Cargar el índice
    if (this.indexPath) {
      this.loadIndex();
    }

    // Suscribirse a cambios de idioma
    this.languageSubscription = this.translate.language$.subscribe((lang: string) => {
      const newLang = this.convertLangToRoute(lang);
      if (this.currentLang !== newLang) {
        this.currentLang = newLang;
        // Actualizar indexPath con el nuevo idioma
        this.updateIndexPathForLanguage(newLang);
        this.loadIndex();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['indexPath'] && !changes['indexPath'].firstChange) {
      this.loadIndex();
    }
    if (changes['initialDoc'] && !changes['initialDoc'].firstChange && this.initialDoc) {
      this.loadDocument(this.initialDoc, this.currentLang);
    }
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
    this.clearExampleComponents();
  }

  convertLangToRoute(lang: string): string {
    return lang.toLowerCase();
  }

  private updateIndexPathForLanguage(lang: string): void {
    // Actualizar el indexPath para reflejar el nuevo idioma
    // Ej: '/documentation/catarina/es/_index.json' -> '/documentation/catarina/en/_index.json'
    this.indexPath = this.indexPath.replace(/\/[a-z]{2}\/_index\.json$/, `/${lang}/_index.json`);
  }

  loadIndex() {
    if (!this.indexPath) return;

    this.http.get<IndexData>(this.indexPath)
      .subscribe({
        next: (data) => {
          this.indexData = data;
          // Si hay un documento inicial, cargarlo
          if (this.initialDoc) {
            this.currentDoc = this.initialDoc;
            this.loadDocument(this.initialDoc, this.currentLang);
          } else if (data.sections.length > 0 && data.sections[0].path) {
            // Cargar el primer documento por defecto
            const firstDoc = this.extractDocName(data.sections[0].path);
            this.currentDoc = firstDoc;
            this.loadDocument(firstDoc, this.currentLang);
          }
        },
        error: (error) => {
          console.error('Error loading index:', error);
          this.show404 = true;
        }
      });
  }

  loadDocument(doc: string, lang: string) {
    // Verificar si el documento existe en el índice
    if (!this.documentExists(doc)) {
      console.error(`Document not found: ${doc}`);
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
    // Extraer la ruta base del indexPath
    // Ej: '/documentation/catarina/es/_index.json' -> '/documentation/catarina/'
    const basePath = this.indexPath.replace(/\/[a-z]{2}\/_index\.json$/, '/');
    
    // Busca el path en el índex (_index.json)
    if (this.indexData) {
      for (const section of this.indexData.sections) {
        // Buscar en items simples
        if (section.path) {
          const sectionDoc = this.extractDocName(section.path);
          if (sectionDoc === doc) {
            // Agregar el sufijo de idioma al path
            const pathWithLang = this.addLangSuffix(section.path, lang);
            return `${basePath}${pathWithLang}`;
          }
        }
        
        // Buscar en grupos
        if (section.items) {
          for (const item of section.items) {
            const itemDoc = this.extractDocName(item.path);
            if (itemDoc === doc) {
              // Agregar el sufijo de idioma al path
              const pathWithLang = this.addLangSuffix(item.path, lang);
              return `${basePath}${pathWithLang}`;
            }
          }
        }
      }
    }
    
    // Fallback: intentar cargar directamente con sufijo de idioma
    return `${basePath}${doc}-${lang}.md`;
  }

  addLangSuffix(path: string, lang: string): string {
    /* Agregar el sufijo de idioma antes de la extensión .md
    Ej: "button.md" -> "button-es.md", "README.md" -> "README-es.md" */
    // Si ya tiene un sufijo de idioma, reemplazarlo
    const withoutLang = path.replace(/-[a-z]{2}\.md$/, '.md');
    return withoutLang.replace('.md', `-${lang}.md`);
  }

  extractDocName(path: string): string {
    /* Extrae el nombre del documento de la ruta en el _index.json sin la extensión .md
    Ej: "get-started-es.md" -> "get-started", "README.md" -> "README" */
    // Primero quitar la extensión .md
    let withoutExt = path.replace(/\.md$/, '');
    // Luego quitar el sufijo de idioma si existe (ej: -es, -en)
    withoutExt = withoutExt.replace(/-[a-z]{2}$/, '');
    const parts = withoutExt.split('/');
    return parts[parts.length - 1];
  }

  navigateToDoc(path: string, lang: string) {
    // Extraer el nombre del documento de la ruta
    const docName = this.extractDocName(path);
    this.currentDoc = docName;
    
    // Si hay un callback personalizado, usarlo
    if (this.onNavigate) {
      this.onNavigate(path, lang);
    } else {
      // Cargar el documento directamente
      this.loadDocument(docName, lang);
    }
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
}
