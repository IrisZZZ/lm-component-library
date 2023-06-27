import { TestBed } from '@angular/core/testing';

import { LmComponentLibraryService } from './lm-component-library.service';

describe('LmComponentLibraryService', () => {
  let service: LmComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
