import { Component } from '@angular/core';
import { Card } from 'catarina';

@Component({
  selector: 'app-card-variants-example',
  imports: [Card],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-card variant="surface">
        <h3>Surface</h3>
        <p>Tarjeta con variante surface</p>
      </cat-card>
      <cat-card variant="outlined">
        <h3>Outlined</h3>
        <p>Tarjeta con variante outlined</p>
      </cat-card>
      <cat-card variant="elevated">
        <h3>Elevated</h3>
        <p>Tarjeta con variante elevated</p>
      </cat-card>
    </div>
  `,
  styles: ``
})
export class CardVariantsExample {
  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-card variant="surface">
    <h3>Surface</h3>
    <p>Tarjeta con variante surface</p>
  </cat-card>
  <cat-card variant="outlined">
    <h3>Outlined</h3>
    <p>Tarjeta con variante outlined</p>
  </cat-card>
  <cat-card variant="elevated">
    <h3>Elevated</h3>
    <p>Tarjeta con variante elevated</p>
  </cat-card>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Card } from 'catarina';

@Component({
  selector: 'app-card-variants-example',
  imports: [Card],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-card variant="surface">
        <h3>Surface</h3>
        <p>Tarjeta con variante surface</p>
      </cat-card>
      <cat-card variant="outlined">
        <h3>Outlined</h3>
        <p>Tarjeta con variante outlined</p>
      </cat-card>
      <cat-card variant="elevated">
        <h3>Elevated</h3>
        <p>Tarjeta con variante elevated</p>
      </cat-card>
    </div>
  \`,
  styles: \`\`
})
export class CardVariantsExample {}`;
  }
}
