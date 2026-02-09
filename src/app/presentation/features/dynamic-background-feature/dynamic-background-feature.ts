import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Button, Theming } from 'catarina';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-background-feature',
  imports: [Button],
  templateUrl: `dynamic-background-feature.html`,
  styleUrl: 'dynamic-background-feature.scss'
})
export class DynamicBackgroundFeature implements AfterViewInit, OnDestroy {
  backgroundImagesUrl: string = '/multimedia/images/backgrounds/';
  images?: string[];

  backgroundElement?: HTMLElement

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
      this.setImagesLinks(),
        this.setBackgroundImage()
    }
    );
  }

  ngAfterViewInit(): void {
    this.setImagesLinks();
    this.backgroundElement = this.el.nativeElement.querySelector('.generalBackground') as HTMLElement;

    this.setBackgroundImage();
  }

  ngOnDestroy(): void {
    this.activeThemeSubscription?.unsubscribe();
  }

  setImagesLinks() {
    this.images = [
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '1.svg',
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '2.svg',
      this.backgroundImagesUrl + (this.activeTheme ? 'night' : 'day') + '3.svg', //Non background
    ];
  }

  setBackgroundImage() {
    if (!this.backgroundElement) return;
    this.renderer.setAttribute(this.backgroundElement, 'style', `background-image: url(${this.images![this.imageIndex]});`);
  }


  changeImageIndex(increment: boolean) {
    this.imageIndex += increment ? 1 : -1;
    if (this.imageIndex < 0) this.imageIndex = this.images ? this.images.length - 1 : 0;
    if (this.images && this.imageIndex >= this.images.length) this.imageIndex = 0;
    this.setBackgroundImage();
  }
}
