import { Component } from '@angular/core';
import { Icon } from 'catarina';

@Component({
  selector: 'app-icon-sizes-example',
  imports: [Icon],
  template: `
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <cat-icon name="home" size="16px"></cat-icon>
      <cat-icon name="home" size="24px"></cat-icon>
      <cat-icon name="home" size="32px"></cat-icon>
      <cat-icon name="home" size="48px"></cat-icon>
      <cat-icon name="home" size="2em"></cat-icon>
    </div>
  `,
  styles: ``
})
export class IconSizesExample {
  static get htmlCode(): string {
    return `<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
  <cat-icon name="home" size="16px"></cat-icon>
  <cat-icon name="home" size="24px"></cat-icon>
  <cat-icon name="home" size="32px"></cat-icon>
  <cat-icon name="home" size="48px"></cat-icon>
  <cat-icon name="home" size="2em"></cat-icon>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Icon } from 'catarina';

@Component({
  selector: 'app-icon-sizes-example',
  imports: [Icon],
  template: \`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <cat-icon name="home" size="16px"></cat-icon>
      <cat-icon name="home" size="24px"></cat-icon>
      <cat-icon name="home" size="32px"></cat-icon>
      <cat-icon name="home" size="48px"></cat-icon>
      <cat-icon name="home" size="2em"></cat-icon>
    </div>
  \`,
  styles: \`\`
})
export class IconSizesExample {}`;
  }
}
