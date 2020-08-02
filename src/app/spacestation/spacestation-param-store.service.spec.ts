import { TestBed } from '@angular/core/testing';

import { SpacestationParamStoreService } from './spacestation-param-store.service';

describe('SpacestationParamStoreService', () => {
  let service: SpacestationParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacestationParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
