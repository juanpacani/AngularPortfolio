import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'catarina';

@Component({
  selector: 'app-button-events-example',
  imports: [Button, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <cat-button (clicked)="onClick()">Click me</cat-button>
      <p *ngIf="clickCount > 0">Clicks: {{ clickCount }}</p>
    </div>
  `,
  styles: ``
})
export class ButtonEventsExample {
  clickCount = 0;

  onClick() {
    this.clickCount++;
  }

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 0.75rem;">
  <cat-button (clicked)="onClick()">Click me</cat-button>
  <p *ngIf="clickCount > 0">Clicks: {{ clickCount }}</p>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-events-example',
  imports: [Button, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <cat-button (clicked)="onClick()">Click me</cat-button>
      <p *ngIf="clickCount > 0">Clicks: {{ clickCount }}</p>
    </div>
  \`,
  styles: \`\`
})
export class ButtonEventsExample {
  clickCount = 0;

  onClick() {
    this.clickCount++;
  }
}`;
  }
}
