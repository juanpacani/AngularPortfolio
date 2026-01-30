import { Component } from '@angular/core';
import { PasswordInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input-example',
  imports: [PasswordInput, FormsModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-password-input [(ngModel)]="passwordValue" placeholder="Ingresa tu contraseña"></cat-password-input>
    </div>
  `,
  styles: ``
})
export class PasswordInputExample {
  passwordValue = '';

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-password-input [(ngModel)]="passwordValue" placeholder="Ingresa tu contraseña"></cat-password-input>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { PasswordInput } from 'catarina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-input-example',
  imports: [PasswordInput, FormsModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-password-input [(ngModel)]="passwordValue" placeholder="Ingresa tu contraseña"></cat-password-input>
    </div>
  \`,
  styles: \`\`
})
export class PasswordInputExample {
  passwordValue = '';
}`;
  }
}
