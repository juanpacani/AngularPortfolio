import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { uiButton } from '../../../attoms/ui/button/button';
import { NgIf, NgClass } from "@angular/common";
import { UiStyleMapping } from '../../../../utilities/services/stylesMapping/style-mapping';

@Component({
  selector: 'ui-accordion',
  imports: [uiButton, NgIf, NgClass],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class UiAccordion implements OnInit{
  @Input() styles: { q: string, v: string }[] = [];
  @Input() accordionId?: string;
  @Input() status: boolean = false;//false = unactive
  @Input() label: string = 'Accordion Name';

  @Output() updateAccordionGroupStatusOutput = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private el: ElementRef, private styleMapping: UiStyleMapping){}

  ngOnInit(): void {
      this.overrideStyles();
  }

  updateAccordionGroupStatus() {
    this.status =! this.status;
    this.updateAccordionGroupStatusOutput.emit(this.accordionId!);
  }

  forceStatus(newStatus: boolean): void {
    this.status = newStatus;
  };

  overrideStyles() {
    const section: any = this.el.nativeElement.querySelector('section');
    this.styleMapping.overrideStyles(this.renderer, this.styles, section);
    /*let styles: string = '';
    if (!section) return;
    this.styles.forEach(e => {
      styles = styles + e.q + ' ' + e.v;
    });
    this.renderer.setAttribute(section, 'style', styles);*/


  };
}