import { Component } from '@angular/core';
import { RangeInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-input-example',
  imports: [RangeInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-range-input [(ngModel)]="rangeValue"></cat-range-input>
      <p>Valor: {{ rangeValue }}</p>
    </div>
  `,
  styles: ``
})
export class RangeInputExample {
  rangeValue = 50;

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-range-input [(ngModel)]="rangeValue"></cat-range-input>
  <p>Valor: {{ rangeValue }}</p>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { RangeInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-range-input-example',
  imports: [RangeInput, FormsModule, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-range-input [(ngModel)]="rangeValue"></cat-range-input>
      <p>Valor: {{ rangeValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class RangeInputExample {
  rangeValue = 50;
}`;
  }
}
