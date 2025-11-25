import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicFeature } from './music-feature';

describe('MusicFeature', () => {
  let component: MusicFeature;
  let fixture: ComponentFixture<MusicFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
