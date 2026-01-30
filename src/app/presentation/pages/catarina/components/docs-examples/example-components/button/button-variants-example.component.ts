import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-variants-example',
  imports: [Button],
  template: `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button variant="primary">Primary</cat-button>
      <cat-button variant="secondary">Secondary</cat-button>
      <cat-button variant="contrast">Contrast</cat-button>
      <cat-button variant="outline">Outline</cat-button>
      <cat-button variant="ghost">Ghost</cat-button>
    </div>
  `,
  styles: ``
})
export class ButtonVariantsExample {
  static get htmlCode(): string {
    return `<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <cat-button variant="primary">Primary</cat-button>
  <cat-button variant="secondary">Secondary</cat-button>
  <cat-button variant="contrast">Contrast</cat-button>
  <cat-button variant="outline">Outline</cat-button>
  <cat-button variant="ghost">Ghost</cat-button>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-variants-example',
  imports: [Button],
  template: \`
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button variant="primary">Primary</cat-button>
      <cat-button variant="secondary">Secondary</cat-button>
      <cat-button variant="contrast">Contrast</cat-button>
      <cat-button variant="outline">Outline</cat-button>
      <cat-button variant="ghost">Ghost</cat-button>
    </div>
  \`,
  styles: \`\`
})
export class ButtonVariantsExample {}`;
  }
}
