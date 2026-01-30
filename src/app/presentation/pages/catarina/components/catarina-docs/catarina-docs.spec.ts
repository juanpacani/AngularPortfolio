import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatarinaDocs } from './catarina-docs';

describe('CatarinaDocs', () => {
  let component: CatarinaDocs;
  let fixture: ComponentFixture<CatarinaDocs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatarinaDocs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatarinaDocs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
