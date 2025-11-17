import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBasicData } from './profile-basic-data';

describe('ProfileBasicData', () => {
  let component: ProfileBasicData;
  let fixture: ComponentFixture<ProfileBasicData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBasicData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBasicData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
