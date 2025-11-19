import { Component } from '@angular/core';
import { UiAccordion } from '../../../../../../desing_system/components/molecules/ui/accordion/accordion';
import { UiAccordionGroup } from '../../../../../../desing_system/components/organisms/accordion-group/accordion-group';

@Component({
  selector: 'app-curriculum',
  imports: [UiAccordion, UiAccordionGroup],
  template: `
  <section style="width: 100%; height: 100%;">
    <ui-accordion-group>
      <ui-accordion label="Summary" [accordionId]="'1'" [styles]="[{p: 'width', v: '30%'}]"><p>1</p></ui-accordion>
      <ui-accordion label="Education" [accordionId]="'2'" [styles]="[{p: 'width', v: '30%'}]"><p>2</p></ui-accordion>
      <ui-accordion label="Experience" [accordionId]="'3'" [styles]="[{p: 'width', v: '30%'}]"><p>3</p></ui-accordion>
    </ui-accordion-group>
  </section>
  `,
  styles: ``
})
export class Curriculum {

}