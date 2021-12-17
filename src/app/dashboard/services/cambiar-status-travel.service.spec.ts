import { TestBed } from '@angular/core/testing';

import { CambiarStatusTravelService } from './cambiar-status-travel.service';

describe('CambiarStatusTravelService', () => {
  let service: CambiarStatusTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambiarStatusTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
