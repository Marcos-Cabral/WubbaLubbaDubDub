import { TestBed } from '@angular/core/testing';

import { LocationsServiceService } from './locations-service.service';

describe('LocationsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsServiceService = TestBed.get(LocationsServiceService);
    expect(service).toBeTruthy();
  });
});
