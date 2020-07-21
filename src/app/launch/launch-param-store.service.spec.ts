import { TestBed } from '@angular/core/testing';

import { LaunchParamStoreService } from './launch-param-store.service';

describe('LaunchParamStoreService', () => {
  let service: LaunchParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
