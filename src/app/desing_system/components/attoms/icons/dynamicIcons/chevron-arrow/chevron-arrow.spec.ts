import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChevronArrow } from './chevron-arrow';

describe('ChevronArrow', () => {
  let component: ChevronArrow;
  let fixture: ComponentFixture<ChevronArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChevronArrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChevronArrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
