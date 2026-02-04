import { Component } from '@angular/core';
import { Dialog, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-variants-example',
  imports: [Dialog, Button, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-button (clicked)="showDialog1 = true">Abrir Dialog Surface</cat-button>
      <cat-button (clicked)="showDialog2 = true">Abrir Dialog Outlined</cat-button>
      <cat-button (clicked)="showDialog3 = true">Abrir Dialog Elevated</cat-button>
      
      <cat-dialog *ngIf="showDialog1" variant="surface" (closs)="showDialog1 = false">
        <h3>Dialog Surface</h3>
        <p>Este es un diálogo con variante surface</p>
        <cat-button (clicked)="showDialog1 = false">Cerrar</cat-button>
      </cat-dialog>
      
      <cat-dialog *ngIf="showDialog2" variant="outlined" (closs)="showDialog2 = false">
        <h3>Dialog Outlined</h3>
        <p>Este es un diálogo con variante outlined</p>
        <cat-button (clicked)="showDialog2 = false">Cerrar</cat-button>
      </cat-dialog>
      
      <cat-dialog *ngIf="showDialog3" variant="elevated" (closs)="showDialog3 = false">
        <h3>Dialog Elevated</h3>
        <p>Este es un diálogo con variante elevated</p>
        <cat-button (clicked)="showDialog3 = false">Cerrar</cat-button>
      </cat-dialog>
    </div>
  `,
  styles: ``
})
export class DialogVariantsExample {
  showDialog1 = false;
  showDialog2 = false;
  showDialog3 = false;

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-button (clicked)="showDialog1 = true">Abrir Dialog Surface</cat-button>
  <cat-button (clicked)="showDialog2 = true">Abrir Dialog Outlined</cat-button>
  <cat-button (clicked)="showDialog3 = true">Abrir Dialog Elevated</cat-button>
  
  <cat-dialog *ngIf="showDialog1" variant="surface" (closs)="showDialog1 = false">
    <h3>Dialog Surface</h3>
    <p>Este es un diálogo con variante surface</p>
    <cat-button (clicked)="showDialog1 = false">Cerrar</cat-button>
  </cat-dialog>
  
  <cat-dialog *ngIf="showDialog2" variant="outlined" (closs)="showDialog2 = false">
    <h3>Dialog Outlined</h3>
    <p>Este es un diálogo con variante outlined</p>
    <cat-button (clicked)="showDialog2 = false">Cerrar</cat-button>
  </cat-dialog>
  
  <cat-dialog *ngIf="showDialog3" variant="elevated" (closs)="showDialog3 = false">
    <h3>Dialog Elevated</h3>
    <p>Este es un diálogo con variante elevated</p>
    <cat-button (clicked)="showDialog3 = false">Cerrar</cat-button>
  </cat-dialog>
</div>`;
  }

  static get cssCode(): string {
    return ``;
  }

  static get tsCode(): string {
    return `import { Component } from '@angular/core';
import { Dialog, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-variants-example',
  imports: [Dialog, Button, CommonModule],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-button (clicked)="showDialog1 = true">Abrir Dialog Surface</cat-button>
      <cat-button (clicked)="showDialog2 = true">Abrir Dialog Outlined</cat-button>
      <cat-button (clicked)="showDialog3 = true">Abrir Dialog Elevated</cat-button>
      
      <cat-dialog *ngIf="showDialog1" variant="surface" (closs)="showDialog1 = false">
        <h3>Dialog Surface</h3>
        <p>Este es un diálogo con variante surface</p>
        <cat-button (clicked)="showDialog1 = false">Cerrar</cat-button>
      </cat-dialog>
      
      <cat-dialog *ngIf="showDialog2" variant="outlined" (closs)="showDialog2 = false">
        <h3>Dialog Outlined</h3>
        <p>Este es un diálogo con variante outlined</p>
        <cat-button (clicked)="showDialog2 = false">Cerrar</cat-button>
      </cat-dialog>
      
      <cat-dialog *ngIf="showDialog3" variant="elevated" (closs)="showDialog3 = false">
        <h3>Dialog Elevated</h3>
        <p>Este es un diálogo con variante elevated</p>
        <cat-button (clicked)="showDialog3 = false">Cerrar</cat-button>
      </cat-dialog>
    </div>
  \`,
  styles: \`\`
})
export class DialogVariantsExample {
  showDialog1 = false;
  showDialog2 = false;
  showDialog3 = false;
}`;
  }
}
