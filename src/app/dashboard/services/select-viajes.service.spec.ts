import { TestBed } from '@angular/core/testing';

import { SelectViajesService } from './select-viajes.service';

describe('SelectViajesService', () => {
  let service: SelectViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
