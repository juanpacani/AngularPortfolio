import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconEyeSlash } from './eye-slash';

describe('UiIconEyeSlash', () => {
  let component: UiIconEyeSlash;
  let fixture: ComponentFixture<UiIconEyeSlash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconEyeSlash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconEyeSlash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
