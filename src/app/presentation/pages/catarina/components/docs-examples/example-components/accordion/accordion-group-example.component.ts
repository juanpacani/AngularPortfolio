import { Component } from '@angular/core';
import { Accordion, AccordionGroup } from 'catarina';

@Component({
  selector: 'app-accordion-group-example',
  imports: [Accordion, AccordionGroup],
  template: `
    <cat-accordion-group [singleExpand]="true">
      <cat-accordion accordionId="1" label="Sección 1">
        <p>Contenido de la sección 1</p>
      </cat-accordion>
      <cat-accordion accordionId="2" label="Sección 2">
        <p>Contenido de la sección 2</p>
      </cat-accordion>
      <cat-accordion accordionId="3" label="Sección 3">
        <p>Contenido de la sección 3</p>
      </cat-accordion>
    </cat-accordion-group>
  `,
  styles: ``
})
export class AccordionGroupExample {
  static get htmlCode(): string {
    return `<cat-accordion-group [singleExpand]="true">
  <cat-accordion accordionId="1" label="Sección 1">
    <p>Contenido de la sección 1</p>
  </cat-accordion>
  <cat-accordion accordionId="2" label="Sección 2">
    <p>Contenido de la sección 2</p>
  </cat-accordion>
  <cat-accordion accordionId="3" label="Sección 3">
    <p>Contenido de la sección 3</p>
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
      <cat-accordion accordionId="1" label="Sección 1">
        <p>Contenido de la sección 1</p>
      </cat-accordion>
      <cat-accordion accordionId="2" label="Sección 2">
        <p>Contenido de la sección 2</p>
      </cat-accordion>
      <cat-accordion accordionId="3" label="Sección 3">
        <p>Contenido de la sección 3</p>
      </cat-accordion>
    </cat-accordion-group>
  \`,
  styles: \`\`
})
export class AccordionGroupExample {}`;
  }
}
