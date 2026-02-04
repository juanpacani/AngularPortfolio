import { Component } from '@angular/core';
import { ColorInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-input-example',
  imports: [ColorInput, FormsModule, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-color-input [(ngModel)]="colorValue"></cat-color-input>
      <cat-color-input [icon]="true" [(ngModel)]="colorValue2"></cat-color-input>
      <p *ngIf="colorValue">Color seleccionado: {{ colorValue }}</p>
    </div>
  `,
  styles: ``
})
export class ColorInputExample {
  colorValue = '#16709c';
  colorValue2 = '#3b82f6';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-color-input [(ngModel)]="colorValue"></cat-color-input>
  <cat-color-input [icon]="true" [(ngModel)]="colorValue2"></cat-color-input>
  <p *ngIf="colorValue">Color seleccionado: {{ colorValue }}</p>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { ColorInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-input-example',
  imports: [ColorInput, FormsModule, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-color-input [(ngModel)]="colorValue"></cat-color-input>
      <cat-color-input [icon]="true" [(ngModel)]="colorValue2"></cat-color-input>
      <p *ngIf="colorValue">Color seleccionado: {{ colorValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class ColorInputExample {
  colorValue = '#16709c';
  colorValue2 = '#3b82f6';
}`;
  }
}
