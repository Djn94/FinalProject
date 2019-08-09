import { TestBed } from '@angular/core/testing';

import { NecklacesService } from './Necklaces.service';

describe('NecklacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NecklacesService = TestBed.get(NecklacesService);
    expect(service).toBeTruthy();
  });
});
