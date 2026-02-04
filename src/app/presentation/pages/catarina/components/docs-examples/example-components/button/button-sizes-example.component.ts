import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-sizes-example',
  imports: [Button],
  template: `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button size="sm">Small</cat-button>
      <cat-button size="md">Medium</cat-button>
      <cat-button size="lg">Large</cat-button>
    </div>
  `,
  styles: ``
})
export class ButtonSizesExample {
  static get htmlCode(): string {
    return `<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <cat-button size="sm">Small</cat-button>
  <cat-button size="md">Medium</cat-button>
  <cat-button size="lg">Large</cat-button>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-sizes-example',
  imports: [Button],
  template: \`
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button size="sm">Small</cat-button>
      <cat-button size="md">Medium</cat-button>
      <cat-button size="lg">Large</cat-button>
    </div>
  \`,
  styles: \`\`
})
export class ButtonSizesExample {}`;
  }
}
