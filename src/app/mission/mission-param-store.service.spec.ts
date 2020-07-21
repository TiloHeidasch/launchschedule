import { TestBed } from '@angular/core/testing';

import { MissionParamStoreService } from './mission-param-store.service';

describe('MissionParamStoreService', () => {
  let service: MissionParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
