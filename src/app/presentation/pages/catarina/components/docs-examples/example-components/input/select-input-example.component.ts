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
        placeholder="Select an option">
      </cat-select-input>
      <p *ngIf="selectedValue">Selected: {{ selectedValue }}</p>
    </div>
  `,
  styles: ``
})
export class SelectInputExample {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-select-input 
    [options]="options" 
    [(ngModel)]="selectedValue"
    placeholder="Select an option">
  </cat-select-input>
  <p *ngIf="selectedValue">Selected: {{ selectedValue }}</p>
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
        placeholder="Select an option">
      </cat-select-input>
      <p *ngIf="selectedValue">Selected: {{ selectedValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class SelectInputExample {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedValue = '';
}`;
  }
}
