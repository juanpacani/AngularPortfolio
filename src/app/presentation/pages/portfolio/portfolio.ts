import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { PcTemplate } from './components/templates/pc-template/pc-template';
import { Theming } from '../../../desing_system/utilities/services/theming/theming';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, PcTemplate],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnDestroy {

  activeThemeSubscription: Subscription | null;
  activeTheme?: boolean = false;

  constructor(
    private theming: Theming
  ) {
    this.activeThemeSubscription = theming.activeTheme$.subscribe(e =>
      this.activeTheme = e,
    );
  }

  ngOnDestroy(): void {
    this.activeThemeSubscription?.unsubscribe();
  }
}
