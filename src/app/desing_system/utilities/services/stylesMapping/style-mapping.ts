import { Injectable, Renderer2 } from '@angular/core';
import { UiStyleRule } from '../../../data/ui-constants';

@Injectable({
  providedIn: 'root'
})
export class UiStyleMapping {
  overrideStyles(
    renderer: Renderer2,
    styles: UiStyleRule[], htmlElement?: HTMLElement) {
      
    if (!htmlElement) return;
    styles.forEach(e => {
      renderer.setStyle(htmlElement, e.q, e.v);
    });
  }
}