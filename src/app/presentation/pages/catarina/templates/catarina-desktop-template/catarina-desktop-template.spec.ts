import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaDesktopTemplate } from './catarina-desktop-template';

describe('CatarinaDesktopTemplate', () => {
  let component: CatarinaDesktopTemplate;
  let fixture: ComponentFixture<CatarinaDesktopTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaDesktopTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaDesktopTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
