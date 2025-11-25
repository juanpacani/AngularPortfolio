import { Component, Input } from '@angular/core';
import { iconsPropertiesAbstractClass } from '../../common/icons-properties-abstract-class';

@Component({
  selector: 'ui-icon-chevron-arrow',
  imports: [],
  template: `
  <svg style="height: 2.2em;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" [attr.stroke]="color" class="size-6"
  [style]="'transform: rotate(' + rotation + 'deg)'">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
  `,
  styles: ``
})
export class UiIconChevronArrow extends iconsPropertiesAbstractClass {
  override color: string = 'var(--contrast-neutral-color-9';
  @Input() rotation: string = '';
}
