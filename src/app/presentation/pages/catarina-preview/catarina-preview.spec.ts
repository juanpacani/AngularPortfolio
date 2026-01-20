import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaPreview } from './catarina-preview';

describe('CatarinaPreview', () => {
  let component: CatarinaPreview;
  let fixture: ComponentFixture<CatarinaPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
