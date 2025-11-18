import { AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { UiAccordion } from '../../molecules/ui/accordion/accordion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-accordion-group',
  imports: [],
  templateUrl: './accordion-group.html',
  styles: ``
})
export class UiAccordionGroup implements AfterContentInit, OnDestroy {

  @Input() singleExpand: boolean = true;

  @ContentChildren(UiAccordion) accordions!: QueryList<UiAccordion>;

  accordionActiveId?: String;

  sub?: Subscription | null;

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
}

