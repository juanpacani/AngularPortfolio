import { Component } from '@angular/core';
import { iconsPropertiesAbstractClass } from '../../common/icons-properties-abstract-class';

@Component({
  selector: 'ui-icon-arrow',
  imports: [],
  template: `
    <svg style="height: 2.2em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" [attr.stroke]="color" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
</svg>
  `,
  styles: ``
})
export class UiIconArrow extends iconsPropertiesAbstractClass {
  override color: string = 'var(--contrast-neutral-color-9)';
}