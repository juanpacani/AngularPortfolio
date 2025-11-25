import { Component, Input } from '@angular/core';
import { iconsPropertiesAbstractClass } from '../../common/icons-properties-abstract-class';

@Component({
  selector: 'ui-icon-circle-cross',
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" style="width: 2.2em;" [style]="'transform: rotate(' + rotation + 'deg)'" fill="none" viewBox="0 0 24 24" stroke-width="1.5" [attr.stroke]="color" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  `,
  styles: ``
})
export class UiIconCircleCross extends iconsPropertiesAbstractClass {
  override color: string = 'var(--contrast-neutral-color-9)';
  @Input() rotation: string = '';
}