import { Component } from '@angular/core';
import { Theming } from 'catarina';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colors',
  imports: [],
  templateUrl: './colors.html',
  styleUrl: './colors.scss',
})
export class Colors {
  primaryColors: string[] = [];
  elementColors: string[] = [];
  neutralColors: string[] = [];

  colorsSubscription: Subscription | undefined;

  constructor(private theming: Theming) {
    this.colorsSubscription = this.theming.allPalettes$.subscribe( e => {
      this.primaryColors = e[0];
      this.neutralColors = e[1];
      this.elementColors = e[2];
    });
  }
}
