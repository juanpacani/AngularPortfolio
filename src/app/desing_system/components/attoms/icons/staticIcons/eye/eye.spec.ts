import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconEye } from './eye';

describe('UiIconEye', () => {
  let component: UiIconEye;
  let fixture: ComponentFixture<UiIconEye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconEye]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconEye);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
