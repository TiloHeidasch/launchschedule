import { TestBed } from '@angular/core/testing';

import { LocationParamStoreService } from './location-param-store.service';

describe('LocationParamStoreService', () => {
  let service: LocationParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
