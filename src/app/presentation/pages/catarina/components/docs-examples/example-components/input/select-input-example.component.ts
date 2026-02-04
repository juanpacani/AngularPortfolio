import { Component } from '@angular/core';
import { SelectInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-input-example',
  imports: [SelectInput, FormsModule, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-select-input 
        [options]="options" 
        [(ngModel)]="selectedValue"
        placeholder="Selecciona una opción">
      </cat-select-input>
      <p *ngIf="selectedValue">Seleccionado: {{ selectedValue }}</p>
    </div>
  `,
  styles: ``
})
export class SelectInputExample {
  options = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];
  selectedValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-select-input 
    [options]="options" 
    [(ngModel)]="selectedValue"
    placeholder="Selecciona una opción">
  </cat-select-input>
  <p *ngIf="selectedValue">Seleccionado: {{ selectedValue }}</p>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { SelectInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-input-example',
  imports: [SelectInput, FormsModule, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-select-input 
        [options]="options" 
        [(ngModel)]="selectedValue"
        placeholder="Selecciona una opción">
      </cat-select-input>
      <p *ngIf="selectedValue">Seleccionado: {{ selectedValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class SelectInputExample {
  options = ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'];
  selectedValue = '';
}`;
  }
}
