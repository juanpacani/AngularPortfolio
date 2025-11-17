import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet, NgIf } from "@angular/common";
import { IconMapping } from '../../../../utilities/services/iconMapping/icon-mapping';


@Component({
  selector: 'ui-button',
  imports: [NgIf],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class uiButton implements OnInit {
  @ViewChild('iconHost', { read: ViewContainerRef }) iconHost!: ViewContainerRef;

  @Input() icon?: string;
  @Input() label?: string;
  @Input() severity: 'primary' | 'secondary' | 'succes' | 'info' | 'warn' | 'help' | 'danger' | 'contrast' = 'primary';
  @Input() styles: { q: string, v: string }[] = [];

  @Output() onClick = new EventEmitter<void>();

  selectedColor: string = 'var(--primary-color-9)';
  fontColor: string = 'var(--neutral-color-9)';
  iconColor: string = 'var(--contrast-neutral-color-1)';

  constructor(private iconMapping: IconMapping,
    private renderer: Renderer2, private el: ElementRef
  ) { }

  //Event Emitter
  action() {
    this.onClick.emit();
  }

  //Life Cicle Events
  ngOnInit(): void {
    switch (this.severity) {
      case 'secondary':
        this.selectedColor = 'var(--neutral-color-8)';
        this.fontColor = 'var(--neutral-color-0)';
        this.iconColor = 'var(--contrast-neutral-color-9)';

        break;
      case 'succes':
        this.selectedColor = 'green';
        break;
      case 'info':
        this.selectedColor = 'blue';
        break;
      case 'warn':
        this.selectedColor = 'orange';
        break;
      case 'help':
        this.selectedColor = 'violet';
        break;
      case 'danger':
        this.selectedColor = 'red';
        break;
      case 'contrast':
        this.selectedColor = 'var(--neutral-color-0)';
        // this.fontColor = 'var(--contrast-neutral-color-1)';
        this.iconColor = 'var(--contrast-neutral-color-1)';

        break;
      default:
        this.selectedColor = 'var(--primary-color-9)'
    };
    this.overrideStyles();
  };

  ngAfterViewInit() {
    this.loadIcon(this.iconColor);
  };

  //Icon Events
  getIconComponent(): Type<{ color?: string }> | undefined {
    return this.icon ? this.iconMapping.getIconComponent(this.icon) ?? undefined : undefined;
  };


  loadIcon(iconColor: string) {
    this.iconHost.clear();

    const cmp = this.getIconComponent();
    if (!cmp) return;

    const cmpRef = this.iconHost.createComponent<any>(cmp);
    (cmpRef.instance as any).color = iconColor;
  };

  overrideStyles() {
    const button = this.el.nativeElement.querySelector('.button');
    let styles: string ='';
    if (!button) return;
    this.styles.forEach(e => {
      //const qualifiedName = this.stylesMapping.getStyle(e.qualifiedName);
      styles = styles + e.q + ' ' + e.v;
      if (e.q === 'flex-direction' && e.v === 'column' || 'column-reverse') {
        styles + 'padding-top: 1em; padding-bottom: 0.5em;';
      };
    });    
    this.renderer.setAttribute(button, 'style', styles);
    
  };

};