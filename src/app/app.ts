import { Component, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Subscription } from 'rxjs';
import { Header } from './presentation/layouts/header/header';
import { Body } from './presentation/layouts/body/body';
import { Theming } from './desing_system/utilities/services/theming/theming';

import { UiDrag } from './desing_system/utilities/directives/drag/ui-drag';
import { Dialog } from './desing_system/components/attoms/ui/dialog/dialog';
import { uiButton } from './desing_system/components/attoms/ui/button/button';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Body],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hydenaky HomePage');

  visible: boolean = false;

  //Palettes
  subPalettes: Subscription | null;
  allPalettes: string[][] = [];

  constructor(
    private dinamicTheme: Theming,
  ) {
    this.subPalettes = this.dinamicTheme.allPalettes$.subscribe(e => {
      this.allPalettes = e;
    });
  };

  trackByPalette(i: number, palette: string[]): number {
    return i;
  };

  trackByColor(i: number, color: string) {
    return color;
  };

  clossOverlay() {
    this.visible = false;
    document.body.style.overflow = '';
  };

  openOverlay() {
    this.visible = true;
    document.body.style.overflow = 'hidden';
  }
};
