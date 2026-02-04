import { Component, signal } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Header } from './presentation/layouts/header/header';
import { Body } from './presentation/layouts/body/body';
import { Theming } from 'catarina';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Body],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hydenaky HomePage');

  private readonly initialColorHex: string = '#16709c';
  private readonly initialDarkTheme: boolean = true;

  constructor(private theming: Theming) {
    this.theming.generatePalettes(this.initialColorHex, this.initialDarkTheme);
  }
};
