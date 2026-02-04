import { Component } from '@angular/core';
import { Card } from 'catarina';

@Component({
  selector: 'app-card-sizes-example',
  imports: [Card],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-card size="sm">
        <h3>Small</h3>
        <p>Small card</p>
      </cat-card>
      <cat-card size="md">
        <h3>Medium</h3>
        <p>Medium card</p>
      </cat-card>
      <cat-card size="lg">
        <h3>Large</h3>
        <p>Large card</p>
      </cat-card>
    </div>
  `,
  styles: ``
})
export class CardSizesExample {
  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-card size="sm">
    <h3>Small</h3>
    <p>Small card</p>
  </cat-card>
  <cat-card size="md">
    <h3>Medium</h3>
    <p>Medium card</p>
  </cat-card>
  <cat-card size="lg">
    <h3>Large</h3>
    <p>Large card</p>
  </cat-card>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Card } from 'catarina';

@Component({
  selector: 'app-card-sizes-example',
  imports: [Card],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-card size="sm">
        <h3>Small</h3>
        <p>Small card</p>
      </cat-card>
      <cat-card size="md">
        <h3>Medium</h3>
        <p>Medium card</p>
      </cat-card>
      <cat-card size="lg">
        <h3>Large</h3>
        <p>Large card</p>
      </cat-card>
    </div>
  \`,
  styles: \`\`
})
export class CardSizesExample {}`;
  }
}
