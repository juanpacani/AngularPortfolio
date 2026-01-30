import { Component } from '@angular/core';
import { DateInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-input-example',
  imports: [DateInput, FormsModule, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-date-input [(ngModel)]="dateValue" placeholder="Selecciona una fecha"></cat-date-input>
      @if (dateValue) {
        <p>Fecha seleccionada: {{ dateValue }}</p>
      }
    </div>
  `,
  styles: ``
})
export class DateInputExample {
  dateValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-date-input [(ngModel)]="dateValue" placeholder="Selecciona una fecha"></cat-date-input>
  @if (dateValue) {
    <p>Fecha seleccionada: {{ dateValue }}</p>
  }
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { DateInput } from 'catarina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-input-example',
  imports: [DateInput, FormsModule, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-date-input [(ngModel)]="dateValue" placeholder="Selecciona una fecha"></cat-date-input>
      <p *ngIf="dateValue">Fecha seleccionada: {{ dateValue }}</p>
    </div>
  \`,
  styles: \`\`
})
export class DateInputExample {
  dateValue = '';
}`;
  }
}
