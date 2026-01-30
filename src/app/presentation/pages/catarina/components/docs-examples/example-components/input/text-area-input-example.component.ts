import { Component } from '@angular/core';
import { TextAreaInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area-input-example',
  imports: [TextAreaInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-text-area-input [(ngModel)]="textValue" placeholder="Escribe tu mensaje"></cat-text-area-input>
    </div>
  `,
  styles: ``
})
export class TextAreaInputExample {
  textValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-text-area-input [(ngModel)]="textValue" placeholder="Escribe tu mensaje"></cat-text-area-input>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { TextAreaInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area-input-example',
  imports: [TextAreaInput, FormsModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-text-area-input [(ngModel)]="textValue" placeholder="Escribe tu mensaje"></cat-text-area-input>
    </div>
  \`,
  styles: \`\`
})
export class TextAreaInputExample {
  textValue = '';
}`;
  }
}
