import { TestBed } from '@angular/core/testing';

import { TraerViajesService } from './traer-viajes.service';

describe('TraerViajesService', () => {
  let service: TraerViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
