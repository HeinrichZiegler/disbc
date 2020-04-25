import { TestBed } from '@angular/core/testing';

import { LoadGalerieService } from './load-galerie.service';

describe('LoadGalerieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadGalerieService = TestBed.get(LoadGalerieService);
    expect(service).toBeTruthy();
  });
});
