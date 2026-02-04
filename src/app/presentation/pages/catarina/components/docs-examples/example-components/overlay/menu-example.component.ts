import { Component } from '@angular/core';
import { Menu, Button } from 'catarina';

@Component({
  selector: 'app-menu-example',
  imports: [Menu, Button],
  template: `
    <cat-menu>
      <cat-button>Home</cat-button>
      <cat-button>About</cat-button>
      <cat-button>Services</cat-button>
      <cat-button>Contact</cat-button>
    </cat-menu>
  `,
  styles: ``
})
export class MenuExample {
  static get htmlCode(): string {
    return `<cat-menu>
  <cat-button>Home</cat-button>
  <cat-button>About</cat-button>
  <cat-button>Services</cat-button>
  <cat-button>Contact</cat-button>
</cat-menu>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Menu, Button } from 'catarina';

@Component({
  selector: 'app-menu-example',
  imports: [Menu, Button],
  template: \`
    <cat-menu>
      <cat-button>Home</cat-button>
      <cat-button>About</cat-button>
      <cat-button>Services</cat-button>
      <cat-button>Contact</cat-button>
    </cat-menu>
  \`,
  styles: \`\`
})
export class MenuExample {}`;
  }
}
