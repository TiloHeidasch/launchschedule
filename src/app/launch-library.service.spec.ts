import { TestBed } from '@angular/core/testing';

import { LaunchLibraryService } from './launch-library.service';

describe('LaunchLibraryService', () => {
  let service: LaunchLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
