import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconSun } from './sun';

describe('Sun', () => {
  let component: UiIconSun;
  let fixture: ComponentFixture<UiIconSun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconSun]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconSun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
