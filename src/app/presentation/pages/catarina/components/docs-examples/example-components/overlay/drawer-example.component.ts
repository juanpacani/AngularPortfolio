import { Component } from '@angular/core';
import { Drawer, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer-example',
  imports: [Drawer, Button, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <cat-button (clicked)="showDrawer = true">Open Drawer</cat-button>
      
      <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
        <h3>Lateral Drawer</h3>
        <p>This is a drawer that opens from the left</p>
        <cat-button (clicked)="showDrawer = false">Close</cat-button>
      </cat-drawer>
    </div>
  `,
  styles: ``
})
export class DrawerExample {
  showDrawer = false;

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <cat-button (clicked)="showDrawer = true">Open Drawer</cat-button>
  
  <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
    <h3>Lateral Drawer</h3>
    <p>This is a drawer that opens from the left</p>
    <cat-button (clicked)="showDrawer = false">Close</cat-button>
  </cat-drawer>
</div>`;
  }

  static get cssCode(): string {
    return ``;
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
      <cat-button (clicked)="showDrawer = true">Open Drawer</cat-button>
      
      <cat-drawer *ngIf="showDrawer" side="left" (closs)="showDrawer = false">
        <h3>Lateral Drawer</h3>
        <p>This is a drawer that opens from the left</p>
        <cat-button (clicked)="showDrawer = false">Close</cat-button>
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
