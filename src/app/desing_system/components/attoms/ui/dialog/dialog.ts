import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { UiDrag } from '../../../../utilities/directives/drag/ui-drag';

@Component({
  selector: 'ui-dialog',
  imports: [UiDrag],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  @ViewChild('uiDialogDiv') divEl!: ElementRef<HTMLInputElement>;
  @Output() closs = new EventEmitter<boolean>();
  @Input() styles: { q: string, v: string }[] = [];
  @HostListener('window:keydown.escape', ['$event'])
  handleKeyDown(event: Event) {
    this.clossOverlay();
  }

  constructor(private renderer: Renderer2) { }

  ngAfterViewChecked() {
    this.overrideStyles();
  }

  clossOverlay() {
    this.closs.emit(false);
  };

  overrideStyles() {
    const div = this.divEl.nativeElement;
    if (!div) return;
    this.styles.forEach(e => {
      this.renderer.setStyle(div, e.q, e.v);
    });

  };
}
