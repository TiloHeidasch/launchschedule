import { TestBed } from '@angular/core/testing';

import { EpicService } from './epic.service';

describe('EpicService', () => {
  let service: EpicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
