import { Component } from '@angular/core';
import { CatInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cat-input-basic-example',
  imports: [CatInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <input catInput type="text" placeholder="Name" [(ngModel)]="name">
      <input catInput type="email" placeholder="Email" [(ngModel)]="email">
      <input catInput type="text" placeholder="Phone" [(ngModel)]="phone">
    </div>
  `,
  styles: ``
})
export class CatInputBasicExample {
  name = '';
  email = '';
  phone = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <input catInput type="text" placeholder="Name" [(ngModel)]="name">
  <input catInput type="email" placeholder="Email" [(ngModel)]="email">
  <input catInput type="text" placeholder="Phone" [(ngModel)]="phone">
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
  selector: 'app-cat-input-basic-example',
  imports: [CatInput, FormsModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <input catInput type="text" placeholder="Name" [(ngModel)]="name">
      <input catInput type="email" placeholder="Email" [(ngModel)]="email">
      <input catInput type="text" placeholder="Phone" [(ngModel)]="phone">
    </div>
  \`,
  styles: \`\`
})
export class CatInputBasicExample {
  name = '';
  email = '';
  phone = '';
}`;
  }
}
