import { AfterContentInit, Component, ContentChildren, ElementRef, Input, OnDestroy, QueryList, Renderer2 } from '@angular/core';
import { UiAccordion } from '../../molecules/ui/accordion/accordion';
import { Subscription } from 'rxjs';
import { UiStyleMapping } from '../../../utilities/services/stylesMapping/style-mapping';
import { UiStyleRule } from '../../../data/ui-constants';

@Component({
  selector: 'ui-accordion-group',
  imports: [],
  templateUrl: './accordion-group.html',
  styles: ``
})
export class UiAccordionGroup implements AfterContentInit, OnDestroy {

  @Input() singleExpand: boolean = true;
  @Input() styles: UiStyleRule[] = [];

  @ContentChildren(UiAccordion) accordions!: QueryList<UiAccordion>;

  accordionActiveId?: String;

  sub?: Subscription | null;

  constructor(
    private styleMapping: UiStyleMapping,
    private el: ElementRef,
    private renderer: Renderer2,
  ){}

  ngAfterContentInit(): void {
    if (this.singleExpand) {
      this.accordions.forEach(acc => {
        this.sub = acc.updateAccordionGroupStatusOutput.subscribe(id => {
          this.handleOpen(id);
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  handleOpen(id: string) {
    this.accordions.forEach(acc => acc.forceStatus(false));
    const target = this.accordions.find(acc => acc.accordionId === id);
    if (this.accordionActiveId === id) {         
      target?.forceStatus(false);
      this.accordionActiveId = undefined;
    } else {
      target?.forceStatus(true);
      this.accordionActiveId = id; 
    }
  }

  overrideStyles() {
    const section: any = this.el.nativeElement.querySelector('section');
    if (!section) return;
    
    this.styleMapping.overrideStyles(this.renderer, this.styles, section);
  };
}

