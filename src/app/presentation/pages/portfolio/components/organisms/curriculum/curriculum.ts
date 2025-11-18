import { Component } from '@angular/core';
import { uiAccordion } from '../../../../../../desing_system/components/molecules/ui/accordion/accordion';

@Component({
  selector: 'app-curriculum',
  imports: [uiAccordion],
  template: `
  <section style="width: 100%; height: 100%;">
    <ui-accordion [styles]="[{q: 'width:', v: '5em;'}]"><p>PUTO</p></ui-accordion>
  </section>
  `,
  styles: ``
})
export class Curriculum {

}
