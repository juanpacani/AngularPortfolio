import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaPreviewDesktopTemplate } from './catarina-preview-desktop-template';

describe('CatarinaPreviewDesktopTemplate', () => {
  let component: CatarinaPreviewDesktopTemplate;
  let fixture: ComponentFixture<CatarinaPreviewDesktopTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaPreviewDesktopTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaPreviewDesktopTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
