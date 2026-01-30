import { Component } from '@angular/core';
import { Drawer, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer-example',
  imports: [Drawer, Button, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-button (clicked)="showDrawer = true">Abrir Drawer</cat-button>
      
      <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
        <h3>Drawer Lateral</h3>
        <p>Este es un drawer que se abre desde la izquierda</p>
        <cat-button (clicked)="showDrawer = false">Cerrar</cat-button>
      </cat-drawer>
    </div>
  `,
  styles: ``
})
export class DrawerExample {
  showDrawer = false;

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-button (clicked)="showDrawer = true">Abrir Drawer</cat-button>
  
  <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
    <h3>Drawer Lateral</h3>
    <p>Este es un drawer que se abre desde la izquierda</p>
    <cat-button (clicked)="showDrawer = false">Cerrar</cat-button>
  </cat-drawer>
</div>`;
  }

  static get cssCode(): string {
    return `/* Este ejemplo no tiene estilos CSS personalizados */
/* Los estilos están definidos inline en el template */`;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Drawer, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer-example',
  imports: [Drawer, Button, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-button (clicked)="showDrawer = true">Abrir Drawer</cat-button>
      
      <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
        <h3>Drawer Lateral</h3>
        <p>Este es un drawer que se abre desde la izquierda</p>
        <cat-button (clicked)="showDrawer = false">Cerrar</cat-button>
      </cat-drawer>
    </div>
  \`,
  styles: \`\`
})
export class DrawerExample {
  showDrawer = false;
}`;
  }
}
