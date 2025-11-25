import { Component } from '@angular/core';
import { iconsPropertiesAbstractClass } from '../../common/icons-properties-abstract-class';

@Component({
  selector: 'ui-icon-pause',
  imports: [],
  template: `
    <svg style="height: 2.2em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" [attr.stroke]="color" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>

  `,
  styles: ``
})
export class UiIconPause extends iconsPropertiesAbstractClass {
  override color: string = 'var(--contrast-neutral-color-9)';
}
