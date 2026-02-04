import { Component } from '@angular/core';
import { Icon } from 'catarina';

@Component({
  selector: 'app-icon-basic-example',
  imports: [Icon],
  template: `
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <cat-icon name="home"></cat-icon>
      <cat-icon name="sun"></cat-icon>
      <cat-icon name="moon"></cat-icon>
      <cat-icon name="github"></cat-icon>
      <cat-icon name="linkedin"></cat-icon>
    </div>
  `,
  styles: ``
})
export class IconBasicExample {
  static get htmlCode(): string {
    return `<div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
  <cat-icon name="home"></cat-icon>
  <cat-icon name="sun"></cat-icon>
  <cat-icon name="moon"></cat-icon>
  <cat-icon name="github"></cat-icon>
  <cat-icon name="linkedin"></cat-icon>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Icon } from 'catarina';

@Component({
  selector: 'app-icon-basic-example',
  imports: [Icon],
  template: \`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <cat-icon name="home"></cat-icon>
      <cat-icon name="sun"></cat-icon>
      <cat-icon name="moon"></cat-icon>
      <cat-icon name="github"></cat-icon>
      <cat-icon name="linkedin"></cat-icon>
    </div>
  \`,
  styles: \`\`
})
export class IconBasicExample {}`;
  }
}
