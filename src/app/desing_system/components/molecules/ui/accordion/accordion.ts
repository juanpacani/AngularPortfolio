import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { uiButton } from '../../../attoms/ui/button/button';
import { NgIf } from "@angular/common";

@Component({
  selector: 'ui-accordion',
  imports: [uiButton, NgIf],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class uiAccordion implements OnInit{
  @Input() styles: { q: string, v: string }[] = [];
  @Input() switch: boolean = false;//false = unactive

  constructor(private renderer: Renderer2, private el: ElementRef
  ) { }

  ngOnInit(): void {
      this.overrideStyles();
  }

  overrideStyles() {
    const section: any = this.el.nativeElement.querySelector('section');
    let styles: string = '';
    if (!section) return;
    this.styles.forEach(e => {
      styles = styles + e.q + ' ' + e.v;
    });
    this.renderer.setAttribute(section, 'style', styles);
  };
  
  activeSwitch(): void {
    const contents = this.el.nativeElement.querySelector('div');
    if (this.switch) {
      this.renderer.addClass(contents, 'accordion-content-unactive');
      this.renderer.removeClass(contents, 'accordion-content-active');
    } else {
      this.renderer.addClass(contents, 'accordion-content-active');
      this.renderer.removeClass(contents, 'accordion-content-unactive');
    }
    this.switch =! this.switch;
  };
}