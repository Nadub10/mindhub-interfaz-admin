import { TestBed } from '@angular/core/testing';

import { TraerUsuariosService } from './traer-usuarios.service';

describe('TraerUsuariosService', () => {
  let service: TraerUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
