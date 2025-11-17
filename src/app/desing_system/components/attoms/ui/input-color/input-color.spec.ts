import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputColor } from './input-color';

describe('UiInputColor', () => {
  let component: UiInputColor;
  let fixture: ComponentFixture<UiInputColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
