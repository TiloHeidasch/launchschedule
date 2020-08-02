import { TestBed } from '@angular/core/testing';

import { EventParamStoreService } from './event-param-store.service';

describe('EventParamStoreService', () => {
  let service: EventParamStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventParamStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
