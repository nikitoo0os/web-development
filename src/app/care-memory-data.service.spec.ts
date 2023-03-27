import { TestBed } from '@angular/core/testing';

import { CareMemoryDataService } from './care-memory-data.service';

describe('CareMemoryDataService', () => {
  let service: CareMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
