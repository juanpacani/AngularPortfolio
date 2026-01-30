import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafirialIcons } from './safirial-icons';

describe('SafirialIcons', () => {
  let component: SafirialIcons;
  let fixture: ComponentFixture<SafirialIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafirialIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafirialIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
