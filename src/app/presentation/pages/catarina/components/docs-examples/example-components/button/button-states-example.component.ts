import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-states-example',
  imports: [Button],
  template: `
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button>Normal</cat-button>
      <cat-button [disabled]="true">Disabled</cat-button>
    </div>
  `,
  styles: ``
})
export class ButtonStatesExample {
  static get htmlCode(): string {
    return `<div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
  <cat-button>Normal</cat-button>
  <cat-button [disabled]="true">Disabled</cat-button>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-states-example',
  imports: [Button],
  template: \`
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
      <cat-button>Normal</cat-button>
      <cat-button [disabled]="true">Disabled</cat-button>
    </div>
  \`,
  styles: \`\`
})
export class ButtonStatesExample {}`;
  }
}
