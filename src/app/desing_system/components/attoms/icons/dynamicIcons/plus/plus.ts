import { Component } from '@angular/core';
import { InputColorClass } from '../common/input-color-class';

@Component({
  selector: 'ui-icon-plus',
  imports: [],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" style="width: 2.2em;" fill="none" viewBox="0 0 24 24" stroke-width="1.5" [attr.stroke]="color" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  `,
  styles: ``
})
export class UiIconPlus extends InputColorClass {
  override color: string = 'var(--contrast-neutral-color-9)';
}