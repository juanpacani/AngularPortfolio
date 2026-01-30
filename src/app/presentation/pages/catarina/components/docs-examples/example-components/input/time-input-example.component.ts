import { Component } from '@angular/core';
import { TimeInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-input-example',
  imports: [TimeInput, FormsModule, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-time-input [(ngModel)]="timeValue" placeholder="Selecciona una hora"></cat-time-input>
      @if (timeValue) {
        <p>Hora seleccionada: {{ timeValue }}</p>
      }
    </div>
  `,
  styles: ``
})
export class TimeInputExample {
  timeValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-time-input [(ngModel)]="timeValue" placeholder="Selecciona una hora"></cat-time-input>
  @if (timeValue) {
    <p>Hora seleccionada: {{ timeValue }}</p>
  }
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { TimeInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-input-example',
  imports: [TimeInput, FormsModule, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-time-input [(ngModel)]="timeValue" placeholder="Selecciona una hora"></cat-time-input>
      <p *ngIf="timeValue">Hora seleccionada: {{ timeValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class TimeInputExample {
  timeValue = '';
}`;
  }
}
