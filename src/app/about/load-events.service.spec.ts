import { TestBed } from '@angular/core/testing';

import { LoadEventsService } from './load-events.service';

describe('LoadEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadEventsService = TestBed.get(LoadEventsService);
    expect(service).toBeTruthy();
  });
});
