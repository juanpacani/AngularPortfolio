import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconPause } from './pause';

describe('UiIconPause', () => {
  let component: UiIconPause;
  let fixture: ComponentFixture<UiIconPause>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconPause]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconPause);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
