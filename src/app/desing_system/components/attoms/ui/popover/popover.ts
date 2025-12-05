import { afterNextRender, Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { UiStyleRule } from '../../../../data/ui-constants';
import { delay } from 'rxjs';

@Component({
  selector: 'ui-popover',
  imports: [NgIf],
  templateUrl: './popover.html',
  styleUrl: './popover.scss'
})
export class UiPopover {
  @ViewChild('popover', {static: false}) el!: ElementRef;

  active: boolean = false;

  @Input() style: UiStyleRule[] = [];
  @Input() transform?: string;
  @Input() positionInX?: string;

  constructor() {}

  public setTrue() {
    this.active = true
    
    setTimeout(() => {
      const nativeElement = this.el.nativeElement;
      const rect = nativeElement.getBoundingClientRect();
      if (!rect) return;
      console.log(rect);
    }, 250)
  }
}