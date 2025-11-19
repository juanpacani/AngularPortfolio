import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { NgComponentOutlet, NgIf } from "@angular/common";
import { IconMapping } from '../../../../utilities/services/iconMapping/icon-mapping';
import { UiStyleMapping } from '../../../../utilities/services/stylesMapping/style-mapping';
import { UiStyleRule } from '../../../../data/ui-constants';


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
  @Input() styles: UiStyleRule[] = [];

  @Output() onClick = new EventEmitter<void>();

  iconColor: string = 'var(--contrast-neutral-color-1)';

  constructor(
    private styleMapping: UiStyleMapping,
    private iconMapping: IconMapping,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  //Event Emitter
  action() {
    this.onClick.emit();
  }

  //Life Cicle Events
  ngOnInit(): void {
    var backgroundColor: string = 'var(--primary-color-9)';
    var fontColor: string = 'var(--neutral-color-9)';

    switch (this.severity) {
      case 'secondary':
        backgroundColor = 'var(--neutral-color-8)';
        fontColor = 'var(--neutral-color-0)';
        this.iconColor = 'var(--contrast-neutral-color-9)';
        break;
      case 'succes':
        backgroundColor = 'green';
        break;
      case 'info':
        backgroundColor = 'blue';
        break;
      case 'warn':
        backgroundColor = 'orange';
        break;
      case 'help':
        backgroundColor = 'violet';
        break;
      case 'danger':
        backgroundColor = 'red';
        break;
      case 'contrast':
        backgroundColor = 'var(--neutral-color-0)';
        fontColor = 'var(--contrast-neutral-color-1)';
        this.iconColor = 'var(--contrast-neutral-color-1)';
        break;
      default:
        backgroundColor = 'var(--primary-color-9)'
    };

    this.styles.push({ p: 'background-color', v: backgroundColor }, { p: 'color', v: fontColor});
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

  //Override Styles
  overrideStyles() {
    const button = this.el.nativeElement.querySelector('.ui-button');
    if (!button) return;
    this.styles.forEach(e => {
      if ((e.p === 'flex-direction') && e.v === 'column' || e.v === 'column-reverse') this.styles.push(...[{ p: 'padding-top', v: '1em' }, { p: 'padding-bottom', v: '.5em' }]);
    });

    this.styleMapping.overrideStyles(this.renderer, this.styles, button);    
  };

};