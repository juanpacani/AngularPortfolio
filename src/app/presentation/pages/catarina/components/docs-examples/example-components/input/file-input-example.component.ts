import { Component } from '@angular/core';
import { FileInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-input-example',
  imports: [FileInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-file-input [(ngModel)]="fileValue" placeholder="Selecciona un archivo"></cat-file-input>
    </div>
  `,
  styles: ``
})
export class FileInputExample {
  fileValue: File | null = null;

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-file-input [(ngModel)]="fileValue" placeholder="Selecciona un archivo"></cat-file-input>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { FileInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-input-example',
  imports: [FileInput, FormsModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-file-input [(ngModel)]="fileValue" placeholder="Selecciona un archivo"></cat-file-input>
    </div>
  \`,
  styles: \`\`
})
export class FileInputExample {
  fileValue: File | null = null;
}`;
  }
}
