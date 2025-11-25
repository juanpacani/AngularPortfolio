import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconArrow } from './arrow';

describe('UiIconArrow', () => {
  let component: UiIconArrow;
  let fixture: ComponentFixture<UiIconArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconArrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconArrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
