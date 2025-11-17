import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcTemplate } from './pc-template';

describe('PcTemplate', () => {
  let component: PcTemplate;
  let fixture: ComponentFixture<PcTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
