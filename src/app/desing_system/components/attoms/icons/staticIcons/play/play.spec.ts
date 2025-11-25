import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconPlay } from './play';

describe('UiIconPlay', () => {
  let component: UiIconPlay;
  let fixture: ComponentFixture<UiIconPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
