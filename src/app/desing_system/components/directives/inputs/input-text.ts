import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theming } from '../../../utilities/services/theming/theming';

@Directive({
  selector: '[uiInputText]',
})
export class InputText {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.addClass(this.el.nativeElement, 'inputText');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--neutral-color-9)');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'var(--element-color-2)');
  };
}