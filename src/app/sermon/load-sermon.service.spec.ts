import { TestBed } from '@angular/core/testing';

import { LoadSermonService } from './load-sermon.service';

describe('LoadSermonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadSermonService = TestBed.get(LoadSermonService);
    expect(service).toBeTruthy();
  });
});
