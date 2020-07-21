import { TestBed } from '@angular/core/testing';

import { PayloadParamStoreService } from './payload-param-store.service';

describe('PayloadParamStoreService', () => {
  let service: PayloadParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayloadParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
