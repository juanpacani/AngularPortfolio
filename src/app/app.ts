import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf, UpperCasePipe } from "@angular/common";
import { InputText } from "./desing_system/components/directives/inputs/input-text";
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { UiDrag } from './desing_system/utilities/directives/drag/ui-drag';
import { Theming } from './desing_system/utilities/services/theming/theming';
import { Dialog } from './desing_system/components/attoms/ui/dialog/dialog';
import { uiButton } from './desing_system/components/attoms/ui/button/button';
import { Header } from './presentation/layouts/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, RouterOutlet, Dialog, NgIf, uiButton, UiDrag],//, InputText],
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
