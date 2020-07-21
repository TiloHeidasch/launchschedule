import { TestBed } from '@angular/core/testing';

import { StatisticParamStoreService } from './statistic-param-store.service';

describe('StatisticParamStoreService', () => {
  let service: StatisticParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
