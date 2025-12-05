import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private width = new BehaviorSubject<number>(window.innerWidth);
  width$ = this.width.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .subscribe(() => this.width.next(window.innerWidth));
  }

  get isMobile()  { return this.width.value < 600; }
  get isTablet()  { return this.width.value >= 600 && this.width.value < 1024; }
  get isDesktop() { return this.width.value >= 1024; }
}
