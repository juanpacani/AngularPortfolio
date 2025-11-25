import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconMusicNote } from './music-note';

describe('UiIconMusicNote', () => {
  let component: UiIconMusicNote;
  let fixture: ComponentFixture<UiIconMusicNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiIconMusicNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIconMusicNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
