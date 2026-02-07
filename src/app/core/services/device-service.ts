import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, fromEvent, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private width = new BehaviorSubject<number>(0);
  width$ = this.width.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.width.next(window.innerWidth);

      fromEvent(window, 'resize').subscribe(() => {
        this.width.next(window.innerWidth);
      });
    } else {
      // SSR: asigna un valor por defecto o uno configurable
      this.width.next(1024); // o cualquier tamaño seguro
    }
  }

  get isMobile()  { return this.width.value < 600; }
  get isTablet()  { return this.width.value >= 600 && this.width.value < 1024; }
  get isDesktop() { return this.width.value >= 1024; }
}