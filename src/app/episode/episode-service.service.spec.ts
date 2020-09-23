import { TestBed } from '@angular/core/testing';

import { EpisodeServiceService } from './episode-service.service';

describe('EpisodeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodeServiceService = TestBed.get(EpisodeServiceService);
    expect(service).toBeTruthy();
  });
});
