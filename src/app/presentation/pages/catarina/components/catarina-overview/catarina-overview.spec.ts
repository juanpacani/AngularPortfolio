import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaOverview } from './catarina-overview';

describe('CatarinaOverview', () => {
  let component: CatarinaOverview;
  let fixture: ComponentFixture<CatarinaOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
