import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-icons-example',
  imports: [Button],
  template: `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <cat-button iconLeft="home">Left</cat-button>
        <cat-button iconRight="arrow-right">Right</cat-button>
        <cat-button iconLeft="home" iconRight="arrow-right">Both</cat-button>
        <cat-button iconCenter="x-mark"></cat-button>
      </div>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <cat-button iconLeft="sun">Theme</cat-button>
        <cat-button iconLeft="moon">Dark Mode</cat-button>
      </div>
    </div>
  `,
  styles: ``
})
export class ButtonIconsExample {
  /**
   * Getter estático que retorna el código HTML del template
   */
  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 0.75rem;">
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
    <cat-button iconLeft="home">Home</cat-button>
    <cat-button iconRight="arrow-right">Next</cat-button>
    <cat-button iconLeft="home" iconRight="arrow-right">Both</cat-button>
  </div>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
    <cat-button iconCenter="sun">Theme</cat-button>
    <cat-button iconCenter="moon">Dark Mode</cat-button>
  </div>
</div>`;
  }

  /**
   * Getter estático que retorna el código CSS/SCSS de los estilos
   */
  static get cssCode(): string {
    return ``;
  }

  /**
   * Getter estático que retorna el código TypeScript del componente
   */
  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-icons-example',
  imports: [Button],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <cat-button iconLeft="home">Home</cat-button>
        <cat-button iconRight="arrow-right">Next</cat-button>
        <cat-button iconLeft="home" iconRight="arrow-right">Both</cat-button>
      </div>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <cat-button iconCenter="sun">Theme</cat-button>
        <cat-button iconCenter="moon">Dark Mode</cat-button>
      </div>
    </div>
  \`,
  styles: \`\`
})
export class ButtonIconsExample {}`;
  }
}
