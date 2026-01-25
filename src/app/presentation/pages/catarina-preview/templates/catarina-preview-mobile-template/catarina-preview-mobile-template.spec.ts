import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaPreviewMobileTemplate } from './catarina-preview-mobile-template';

describe('CatarinaPreviewMobileTemplate', () => {
  let component: CatarinaPreviewMobileTemplate;
  let fixture: ComponentFixture<CatarinaPreviewMobileTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaPreviewMobileTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaPreviewMobileTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
