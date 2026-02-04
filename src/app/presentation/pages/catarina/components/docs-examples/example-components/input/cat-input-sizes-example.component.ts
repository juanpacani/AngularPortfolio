import { Component } from '@angular/core';
import { CatInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-input-sizes-example',
  imports: [CatInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <input catInput type="text" placeholder="Small" class="sm" [(ngModel)]="value1">
      <input catInput type="text" placeholder="Medium (default)" [(ngModel)]="value2">
      <input catInput type="text" placeholder="Large" class="lg" [(ngModel)]="value3">
    </div>
  `,
  styles: ``
})
export class CatInputSizesExample {
  value1 = '';
  value2 = '';
  value3 = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <input catInput type="text" placeholder="Small" class="sm" [(ngModel)]="value1">
  <input catInput type="text" placeholder="Medium (default)" [(ngModel)]="value2">
  <input catInput type="text" placeholder="Large" class="lg" [(ngModel)]="value3">
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { CatInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-input-sizes-example',
  imports: [CatInput, FormsModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <input catInput type="text" placeholder="Small" class="sm" [(ngModel)]="value1">
      <input catInput type="text" placeholder="Medium (default)" [(ngModel)]="value2">
      <input catInput type="text" placeholder="Large" class="lg" [(ngModel)]="value3">
    </div>
  \`,
  styles: \`\`
})
export class CatInputSizesExample {
  value1 = '';
  value2 = '';
  value3 = '';
}`;
  }
}
