import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { PcTemplate } from './components/templates/pc-template/pc-template';
import { Theming } from '../../../desing_system/utilities/services/theming/theming';
import { Subscription } from 'rxjs';
import { UiIconChevronArrow } from '../../../desing_system/components/attoms/icons/dynamicIcons/chevron-arrow-up/chevron-arrow';
import { uiButton } from '../../../desing_system/components/attoms/ui/button/button';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, PcTemplate, uiButton],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio implements OnDestroy, AfterViewInit {
  backgroundImagesUrl: string = '/multimedia/images/backgrounds/';
  images?: string[];

  imageIndex: number = 0;

  activeThemeSubscription: Subscription | null;
  activeTheme?: boolean = false;

  constructor(
    private theming: Theming,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.activeThemeSubscription = this.theming.activeTheme$.subscribe(e => {
      this.activeTheme = e,
        this.setBackgroundImage()
    }
    );
  }


  ngAfterViewInit(): void {
    this.setBackgroundImage();
  }

  ngOnDestroy(): void {
    this.activeThemeSubscription?.unsubscribe();
  }

  setBackgroundImage() {
    this.images = [
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '0.svg',
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '1.svg',
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '2.svg',
    ];
    const backgroundElement = this.el.nativeElement.querySelector('.generalBackground') as HTMLElement;
    if (!backgroundElement) return;

    this.renderer.setStyle(backgroundElement, 'background-image', `url(${this.images[0]})`);
  }
}
