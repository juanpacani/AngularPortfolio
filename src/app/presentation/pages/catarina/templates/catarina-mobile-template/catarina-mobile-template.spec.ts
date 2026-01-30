import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaMobileTemplate } from './catarina-mobile-template';

describe('CatarinaMobileTemplate', () => {
  let component: CatarinaMobileTemplate;
  let fixture: ComponentFixture<CatarinaMobileTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaMobileTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaMobileTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
