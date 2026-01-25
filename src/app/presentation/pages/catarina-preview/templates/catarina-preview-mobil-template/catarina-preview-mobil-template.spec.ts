import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaPreviewMobilTemplate } from './catarina-preview-mobil-template';

describe('CatarinaPreviewMobilTemplate', () => {
  let component: CatarinaPreviewMobilTemplate;
  let fixture: ComponentFixture<CatarinaPreviewMobilTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaPreviewMobilTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaPreviewMobilTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
