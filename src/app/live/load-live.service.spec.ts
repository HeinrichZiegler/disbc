import { TestBed } from '@angular/core/testing';

import { LoadLiveService } from './load-live.service';

describe('LoadLiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadLiveService = TestBed.get(LoadLiveService);
    expect(service).toBeTruthy();
  });
});
