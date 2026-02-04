import { Component } from '@angular/core';
import { Accordion, AccordionGroup } from 'catarina';

@Component({
  selector: 'app-accordion-group-example',
  imports: [Accordion, AccordionGroup],
  template: `
    <cat-accordion-group [singleExpand]="true">
      <cat-accordion accordionId="1" label="Section 1">
        <p>Content of section 1</p>
      </cat-accordion>
      <cat-accordion accordionId="2" label="Section 2">
        <p>Content of section 2</p>
      </cat-accordion>
      <cat-accordion accordionId="3" label="Section 3">
        <p>Content of section 3</p>
      </cat-accordion>
    </cat-accordion-group>
  `,
  styles: ``
})
export class AccordionGroupExample {
  static get htmlCode(): string {
    return `<cat-accordion-group [singleExpand]="true">
  <cat-accordion accordionId="1" label="Section 1">
    <p>Content of section 1</p>
  </cat-accordion>
  <cat-accordion accordionId="2" label="Section 2">
    <p>Content of section 2</p>
  </cat-accordion>
  <cat-accordion accordionId="3" label="Section 3">
    <p>Content of section 3</p>
  </cat-accordion>
</cat-accordion-group>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Accordion, AccordionGroup } from 'catarina';

@Component({
  selector: 'app-accordion-group-example',
  imports: [Accordion, AccordionGroup],
  template: \`
    <cat-accordion-group [singleExpand]="true">
      <cat-accordion accordionId="1" label="Section 1">
        <p>Content of section 1</p>
      </cat-accordion>
      <cat-accordion accordionId="2" label="Section 2">
        <p>Content of section 2</p>
      </cat-accordion>
      <cat-accordion accordionId="3" label="Section 3">
        <p>Content of section 3</p>
      </cat-accordion>
    </cat-accordion-group>
  \`,
  styles: \`\`
})
export class AccordionGroupExample {}`;
  }
}
