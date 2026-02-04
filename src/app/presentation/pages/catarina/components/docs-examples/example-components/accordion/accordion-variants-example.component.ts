import { Component } from '@angular/core';
import { Accordion } from 'catarina';

@Component({
  selector: 'app-accordion-variants-example',
  imports: [Accordion],
  template: `
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <cat-accordion label="Surface" variant="surface">
        <p>Accordion con variante surface</p>
      </cat-accordion>
      <cat-accordion label="Outlined" variant="outlined">
        <p>Accordion con variante outlined</p>
      </cat-accordion>
      <cat-accordion label="Elevated" variant="elevated">
        <p>Accordion con variante elevated</p>
      </cat-accordion>
    </div>
  `,
  styles: ``
})
export class AccordionVariantsExample {
  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <cat-accordion label="Surface" variant="surface">
    <p>Accordion con variante surface</p>
  </cat-accordion>
  <cat-accordion label="Outlined" variant="outlined">
    <p>Accordion con variante outlined</p>
  </cat-accordion>
  <cat-accordion label="Elevated" variant="elevated">
    <p>Accordion con variante elevated</p>
  </cat-accordion>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Accordion } from 'catarina';

@Component({
  selector: 'app-accordion-variants-example',
  imports: [Accordion],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <cat-accordion label="Surface" variant="surface">
        <p>Accordion con variante surface</p>
      </cat-accordion>
      <cat-accordion label="Outlined" variant="outlined">
        <p>Accordion con variante outlined</p>
      </cat-accordion>
      <cat-accordion label="Elevated" variant="elevated">
        <p>Accordion con variante elevated</p>
      </cat-accordion>
    </div>
  \`,
  styles: \`\`
})
export class AccordionVariantsExample {}`;
  }
}
