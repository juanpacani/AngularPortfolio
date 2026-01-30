import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeConsole } from './code-console';

describe('CodeConsole', () => {
  let component: CodeConsole;
  let fixture: ComponentFixture<CodeConsole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeConsole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeConsole);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
