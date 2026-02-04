import { Component } from '@angular/core';
import { Accordion } from 'catarina';

@Component({
  selector: 'app-accordion-basic-example',
  imports: [Accordion],
  template: `
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <cat-accordion label="Section 1">
        <p>Content of section 1</p>
      </cat-accordion>
      <cat-accordion label="Section 2">
        <p>Content of section 2</p>
      </cat-accordion>
      <cat-accordion label="Section 3">
        <p>Content of section 3</p>
      </cat-accordion>
    </div>
  `,
  styles: ``
})
export class AccordionBasicExample {
  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 0.5rem;">
  <cat-accordion label="Section 1">
    <p>Content of section 1</p>
  </cat-accordion>
  <cat-accordion label="Section 2">
    <p>Content of section 2</p>
  </cat-accordion>
  <cat-accordion label="Section 3">
    <p>Content of section 3</p>
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
  selector: 'app-accordion-basic-example',
  imports: [Accordion],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <cat-accordion label="Section 1">
        <p>Content of section 1</p>
      </cat-accordion>
      <cat-accordion label="Section 2">
        <p>Content of section 2</p>
      </cat-accordion>
      <cat-accordion label="Section 3">
        <p>Content of section 3</p>
      </cat-accordion>
    </div>
  \`,
  styles: \`\`
})
export class AccordionBasicExample {}`;
  }
}
