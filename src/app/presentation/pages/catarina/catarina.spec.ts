import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catarina } from './catarina';

describe('Catarina', () => {
  let component: Catarina;
  let fixture: ComponentFixture<Catarina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catarina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Catarina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
