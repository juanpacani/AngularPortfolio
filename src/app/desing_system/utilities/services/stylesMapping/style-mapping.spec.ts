import { TestBed } from '@angular/core/testing';

import { StyleMapping } from './style-mapping';

describe('StyleMapping', () => {
  let service: StyleMapping;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleMapping);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
