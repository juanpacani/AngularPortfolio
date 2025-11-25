import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBackgroundFeature } from './dynamic-background-feature';

describe('DynamicBackgroundFeature', () => {
  let component: DynamicBackgroundFeature;
  let fixture: ComponentFixture<DynamicBackgroundFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBackgroundFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBackgroundFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
