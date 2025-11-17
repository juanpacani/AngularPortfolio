import { Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Theming } from '../../../utilities/services/theming/theming';

@Directive({
  selector: '[uiInputText]',
})
export class InputText implements OnDestroy {
  private sub?: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private theming: Theming
  ) {
    this.renderer.addClass(this.el.nativeElement, 'inputText');
    this.sub = this.theming.activeTheme$.subscribe(activeTheme => {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--neutral-color-9)');
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'var(--element-color-2)');
      // if (activeTheme) {
      //   console.log('change');
        
      // } else {
      //   this.renderer.setStyle(this.el.nativeElement, 'background-color', 'var(--contrast-neutral-color-0)');
      // };
    });
  };

  ngOnDestroy() {
    this.sub?.unsubscribe();
  };
}