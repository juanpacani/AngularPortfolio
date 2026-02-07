import { Component, Input, AfterViewInit, ViewChild, ViewContainerRef, ComponentRef, Type, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button, Card } from 'catarina';

type TabType = 'html' | 'css' | 'ts';

/**
 * Los componentes de ejemplo deben tener getters estáticos:
 * - static get htmlCode(): string
 * - static get cssCode(): string
 * - static get tsCode(): string
 */

@Component({
  selector: 'app-code-console',
  imports: [Button, Card, CommonModule],
  templateUrl: './code-console.html',
  styleUrl: './code-console.scss'
})
export class CodeConsole implements AfterViewInit, OnDestroy, OnChanges {
  /**
   * Input: recibe el componente Type que debe tener getters estáticos
   * (htmlCode, cssCode, tsCode)
   */
  @Input() component?: Type<any>;

  @ViewChild('componentContainer', { read: ViewContainerRef })
  componentContainer!: ViewContainerRef;

  activeTab: TabType = 'html';
  componentRef?: ComponentRef<any>;
  private viewInitialized = false;

  /**
   * Obtiene el código actual según el tab activo
   * Accede a los getters estáticos del componente
   */
  get currentCode(): string {
    if (!this.component) return '';

    // Acceder a los getters estáticos del componente
    const ComponentClass = this.component as any;

    switch (this.activeTab) {
      case 'html':
        return ComponentClass.htmlCode || '';
      case 'css':
        return ComponentClass.cssCode || '';
      case 'ts':
        return ComponentClass.tsCode || '';
      default:
        return '';
    }
  }

  ngAfterViewInit() {
    this.viewInitialized = true;
    if (this.component) {
      this.loadComponent();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.viewInitialized && changes['component']) {
      this.loadComponent();
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  loadComponent() {
    if (!this.componentContainer || !this.component) return;

    // Limpia el contenedor anterior
    this.componentContainer.clear();

    // Crea y renderiza el componente dinámicamente
    try {
      this.componentRef = this.componentContainer.createComponent(this.component);
    } catch (error) {
      console.error('Error al cargar el componente:', error);
    }
  }

  setActiveTab(tab: TabType) {
    this.activeTab = tab;
  }

  get hasHtmlCode(): boolean {
    if (!this.component) return false;
    const ComponentClass = this.component as any;
    return ComponentClass.htmlCode && ComponentClass.htmlCode.trim().length > 0;
  }

  get hasCssCode(): boolean {
    if (!this.component) return false;
    const ComponentClass = this.component as any;
    return ComponentClass.cssCode && ComponentClass.cssCode.trim().length > 0;
  }

  get hasTsCode(): boolean {
    if (!this.component) return false;
    const ComponentClass = this.component as any;
    return ComponentClass.tsCode && ComponentClass.tsCode.trim().length > 0;
  }

  copyCode() {
    if (!this.currentCode) return;

    navigator.clipboard.writeText(this.currentCode).then(() => {
      console.log('Código copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar código:', err);
    });
  }

  isActiveTab(tab: TabType): boolean {
    return this.activeTab === tab;
  }
}
