import { Component, Input } from '@angular/core';
import { InputColorClass } from '../common/input-color-class';

@Component({
  selector: 'ui-icon-chevron-arrow',
  imports: [],
  template: `
<svg viewBox="0 0 32 32" style="width: 2.2em"
    [style]="'transform: rotate(' + rotation + ')'"
    xmlns="http://www.w3.org/2000/svg" [attr.fill]="color"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style>.cls-1{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style> </defs> <title></title> <g id="chevron-top"> <line class="cls-1" x1="16" x2="25" y1="11.5" y2="20.5"></line> <line class="cls-1" x1="7" x2="16" y1="20.5" y2="11.5"></line> </g> </g></svg>
  `,
  styles: ``
})
export class UiIconChevronArrow extends InputColorClass {
  override color: string = 'var(--contrast-neutral-color-9)';
  @Input() rotation: string = '';
}
