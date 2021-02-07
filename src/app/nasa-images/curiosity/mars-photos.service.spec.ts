import { TestBed } from '@angular/core/testing';

import { MarsPhotosService } from './mars-photos.service';

describe('MarsPhotosService', () => {
  let service: MarsPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
