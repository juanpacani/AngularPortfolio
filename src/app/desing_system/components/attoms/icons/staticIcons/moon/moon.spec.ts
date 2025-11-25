import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconMoon } from './moon';

describe('UiIconMoon', () => {
  let component: UiIconMoon;
  let fixture: ComponentFixture<UiIconMoon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconMoon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconMoon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
