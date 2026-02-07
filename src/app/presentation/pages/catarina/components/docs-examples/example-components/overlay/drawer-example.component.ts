import { Component } from '@angular/core';
import { Drawer, Button } from 'catarina';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer-example',
  imports: [Drawer, Button, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <cat-button (clicked)="openDrawer('left')">Open Left Drawer</cat-button>
        <cat-button (clicked)="openDrawer('right')">Open Right Drawer</cat-button>
        <cat-button (clicked)="openDrawer('top')">Open Top Drawer</cat-button>
        <cat-button (clicked)="openDrawer('bottom')">Open Bottom Drawer</cat-button>
      </div>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'left'" side="left" (closs)="closeDrawer()">
        <h3>Left Drawer</h3>
        <p>This is a drawer that opens from the left side</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'right'" side="right" (closs)="closeDrawer()">
        <h3>Right Drawer</h3>
        <p>This is a drawer that opens from the right side</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'top'" side="top" (closs)="closeDrawer()">
        <h3>Top Drawer</h3>
        <p>This is a drawer that opens from the top</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'bottom'" side="bottom" (closs)="closeDrawer()">
        <h3>Bottom Drawer</h3>
        <p>This is a drawer that opens from the bottom</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
    </div>
  `,
  styles: ``
})
export class DrawerExample {
  showDrawer = false;
  currentSide: 'left' | 'right' | 'top' | 'bottom' = 'left';

  openDrawer(side: 'left' | 'right' | 'top' | 'bottom') {
    this.currentSide = side;
    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
  }

  static get htmlCode(): string {
    return `<div style="display: flex; flex-direction: column; gap: 1rem;">
  <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
    <cat-button (clicked)="openDrawer('left')">Open Left Drawer</cat-button>
    <cat-button (clicked)="openDrawer('right')">Open Right Drawer</cat-button>
    <cat-button (clicked)="openDrawer('top')">Open Top Drawer</cat-button>
    <cat-button (clicked)="openDrawer('bottom')">Open Bottom Drawer</cat-button>
  </div>
  
  <cat-drawer *ngIf="showDrawer && currentSide === 'left'" side="left" (closs)="closeDrawer()">
    <h3>Left Drawer</h3>
    <p>This is a drawer that opens from the left side</p>
    <cat-button (clicked)="closeDrawer()">Close</cat-button>
  </cat-drawer>
  
  <cat-drawer *ngIf="showDrawer && currentSide === 'right'" side="right" (closs)="closeDrawer()">
    <h3>Right Drawer</h3>
    <p>This is a drawer that opens from the right side</p>
    <cat-button (clicked)="closeDrawer()">Close</cat-button>
  </cat-drawer>
  
  <cat-drawer *ngIf="showDrawer && currentSide === 'top'" side="top" (closs)="closeDrawer()">
    <h3>Top Drawer</h3>
    <p>This is a drawer that opens from the top</p>
    <cat-button (clicked)="closeDrawer()">Close</cat-button>
  </cat-drawer>
  
  <cat-drawer *ngIf="showDrawer && currentSide === 'bottom'" side="bottom" (closs)="closeDrawer()">
    <h3>Bottom Drawer</h3>
    <p>This is a drawer that opens from the bottom</p>
    <cat-button (clicked)="closeDrawer()">Close</cat-button>
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
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <cat-button (clicked)="openDrawer('left')">Open Left Drawer</cat-button>
        <cat-button (clicked)="openDrawer('right')">Open Right Drawer</cat-button>
        <cat-button (clicked)="openDrawer('top')">Open Top Drawer</cat-button>
        <cat-button (clicked)="openDrawer('bottom')">Open Bottom Drawer</cat-button>
      </div>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'left'" side="left" (closs)="closeDrawer()">
        <h3>Left Drawer</h3>
        <p>This is a drawer that opens from the left side</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'right'" side="right" (closs)="closeDrawer()">
        <h3>Right Drawer</h3>
        <p>This is a drawer that opens from the right side</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'top'" side="top" (closs)="closeDrawer()">
        <h3>Top Drawer</h3>
        <p>This is a drawer that opens from the top</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
      
      <cat-drawer *ngIf="showDrawer && currentSide === 'bottom'" side="bottom" (closs)="closeDrawer()">
        <h3>Bottom Drawer</h3>
        <p>This is a drawer that opens from the bottom</p>
        <cat-button (clicked)="closeDrawer()">Close</cat-button>
      </cat-drawer>
    </div>
  \`,
  styles: \`\`
})
export class DrawerExample {
  showDrawer = false;
  currentSide: 'left' | 'right' | 'top' | 'bottom' = 'left';

  openDrawer(side: 'left' | 'right' | 'top' | 'bottom') {
    this.currentSide = side;
    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
  }
}`;
  }
}
