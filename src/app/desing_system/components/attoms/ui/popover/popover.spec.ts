import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPopover } from './popover';

describe('UiPopover', () => {
  let component: UiPopover;
  let fixture: ComponentFixture<UiPopover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPopover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPopover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
