import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconPalette } from './palette';

describe('Palette', () => {
  let component: UiIconPalette;
  let fixture: ComponentFixture<UiIconPalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconPalette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconPalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
