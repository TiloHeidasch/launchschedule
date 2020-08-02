import { TestBed } from '@angular/core/testing';

import { AstronautParamStoreService } from './astronaut-param-store.service';

describe('AstronautParamStoreService', () => {
  let service: AstronautParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstronautParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
