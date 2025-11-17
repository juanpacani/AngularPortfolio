import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileKnowledge } from './profile-knowledge';

describe('ProfileKnowledge', () => {
  let component: ProfileKnowledge;
  let fixture: ComponentFixture<ProfileKnowledge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileKnowledge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileKnowledge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
