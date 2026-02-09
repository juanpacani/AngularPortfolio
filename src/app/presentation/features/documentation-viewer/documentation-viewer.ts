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
import documentationViewerLanguages from './documentation-viewer.language.json';

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
  @ViewChild('docsContent', { read: ElementRef }) docsContent!: ElementRef<HTMLElement>;
  
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
    // Obtiene el idioma inicial del servicio
    this.currentLang = this.convertLangToRoute(this.translate.actualLanguage);
    
    // Carga el índice
    if (this.indexPath) {
      this.loadIndex();
    }

    // Se suscribe a cambios de idioma
    this.languageSubscription = this.translate.language$.subscribe((lang: string) => {
      const newLang = this.convertLangToRoute(lang);
      if (this.currentLang !== newLang) {
        this.currentLang = newLang;
        // Actualiza el indexPath con el nuevo idioma
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
          // Si hay un documento inicial, lo carga
          if (this.initialDoc) {
            this.currentDoc = this.initialDoc;
            this.loadDocument(this.initialDoc, this.currentLang);
          } else if (data.sections.length > 0 && data.sections[0].path) {
            // Carga el primer documento por defecto
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
    // Verifica si el documento existe en el índice
    if (!this.documentExists(doc)) {
      console.error(`Document not found: ${doc}`);
      this.show404 = true;
      this.scrollToTop();
      return;
    }

    // Extrae el nombre del archivo sin extensión y la ruta
    const docPath: string = this.getDocPath(doc, lang);
    
    // Limpia los componentes de ejemplo anteriores
    this.clearExampleComponents();
    
    this.http.get(docPath, { responseType: 'text' })
      .subscribe({
        next: (markdown) => {
          this.show404 = false;
          this.content = markdown;
          // Procesa el markdown a HTML y lo marca como seguro
          const html = MarkdownProcessor.process(markdown);
          this.renderedContent = this.sanitizer.bypassSecurityTrustHtml(html);
          
          // Resetea el scroll al principio
          this.scrollToTop();
          
          // Procesa los placeholders de ejemplo después de un pequeño delay para que el DOM se actualice
          setTimeout(() => this.processExamplePlaceholders(), 0);
        },
        error: (error) => {
          console.error('Error loading document:', error);
          console.error('Attempted path:', docPath);
          // Muestra el 404 en lugar del error
          this.show404 = true;
          this.scrollToTop();
        }
      });
  }

  ngAfterViewInit() {
    // Procesa los placeholders después de que la vista se inicialice
    setTimeout(() => this.processExamplePlaceholders(), 0);
  }

  private processExamplePlaceholders() {
    // Verifica que estamos en el navegador (no en SSR)
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

      // Crea un contenedor para el CodeConsole
      const container = document.createElement('div');
      placeholder.parentNode?.replaceChild(container, placeholder);

      // Crea el componente CodeConsole dinámicamente
      this.createCodeConsoleComponent(container, exampleComponent);
    });
  }

  private createCodeConsoleComponent(container: HTMLElement, exampleComponent: any) {
    // Crea el componente CodeConsole usando createComponent
    const componentRef = createComponent(CodeConsole, {
      hostElement: container,
      environmentInjector: this.environmentInjector,
      elementInjector: this.injector,
    });

    // Establece el input del componente
    componentRef.setInput('component', exampleComponent);

    // Adjunta la vista al árbol de componentes
    this.appRef.attachView(componentRef.hostView);

    // Guarda la referencia para poder destruirla después
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
    // Extrae la ruta base del indexPath
    // Ej: '/documentation/catarina/es/_index.json' -> '/documentation/catarina/'
    const basePath = this.indexPath.replace(/\/[a-z]{2}\/_index\.json$/, '/');
    
    // Busca el path en el índex (_index.json)
    if (this.indexData) {
      for (const section of this.indexData.sections) {
        // Busca en items simples
        if (section.path) {
          const sectionDoc = this.extractDocName(section.path);
          if (sectionDoc === doc) {
            // Agrega el sufijo de idioma al path
            const pathWithLang = this.addLangSuffix(section.path, lang);
            return `${basePath}${pathWithLang}`;
          }
        }
        
        // Busca en grupos
        if (section.items) {
          for (const item of section.items) {
            const itemDoc = this.extractDocName(item.path);
            if (itemDoc === doc) {
              // Agrega el sufijo de idioma al path
              const pathWithLang = this.addLangSuffix(item.path, lang);
              return `${basePath}${pathWithLang}`;
            }
          }
        }
      }
    }
    
    // Fallback: intenta cargar directamente con sufijo de idioma
    return `${basePath}${doc}-${lang}.md`;
  }

  addLangSuffix(path: string, lang: string): string {
    /* Agrega el sufijo de idioma antes de la extensión .md
    Ej: "button.md" -> "button-es.md", "README.md" -> "README-es.md" */
    // Si ya tiene un sufijo de idioma, lo reemplaza
    const withoutLang = path.replace(/-[a-z]{2}\.md$/, '.md');
    return withoutLang.replace('.md', `-${lang}.md`);
  }

  extractDocName(path: string): string {
    /* Extrae el nombre del documento de la ruta en el _index.json sin la extensión .md
    Ej: "get-started-es.md" -> "get-started", "README.md" -> "README" */
    // Primero quita la extensión .md
    let withoutExt = path.replace(/\.md$/, '');
    // Luego quita el sufijo de idioma si existe (ej: -es, -en)
    withoutExt = withoutExt.replace(/-[a-z]{2}$/, '');
    const parts = withoutExt.split('/');
    return parts[parts.length - 1];
  }

  navigateToDoc(path: string, lang: string) {
    // Extrae el nombre del documento de la ruta
    const docName = this.extractDocName(path);
    this.currentDoc = docName;
    
    // Resetea el scroll antes de navegar
    this.scrollToTop();
    
    // Si hay un callback personalizado, lo usa
    if (this.onNavigate) {
      this.onNavigate(path, lang);
    } else {
      // Carga el documento directamente
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
      // Busca en items simples
      if (section.path) {
        const sectionDoc = this.extractDocName(section.path);
        if (sectionDoc === doc) {
          return true;
        }
      }
      
      // Busca en grupos
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
   * Resetea el scroll del contenedor principal al principio
   */
  private scrollToTop() {
    // Resetea el scroll del contenedor principal al principio
    if (typeof document !== 'undefined' && this.docsContent?.nativeElement) {
      const element = this.docsContent.nativeElement;
      // Usa scrollTop para compatibilidad con todos los navegadores
      if (element.scrollTo) {
        element.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollTop = 0;
      }
    }
  }

  /**
   * Obtiene el título del error 404 según el idioma
   */
  get404Title(lang: string): string {
    return (documentationViewerLanguages as any)[lang]?.title ?? '404';
  }

  /**
   * Obtiene el mensaje del error 404 según el idioma
   */
  get404Message(lang: string): string {
    return (documentationViewerLanguages as any)[lang]?.message ?? 'Document not found';
  }

  /**
   * Obtiene la descripción del error 404 según el idioma
   */
  get404Description(lang: string): string {
    return (documentationViewerLanguages as any)[lang]?.description ?? 'The document you are looking for does not exist in the documentation.';
  }
}
