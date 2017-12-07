import { TestBed, inject } from '@angular/core/testing';

import { SupplementalTableService } from './supplemental-table.service';

describe('SupplementalTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplementalTableService]
    });
  });

  it('should be created', inject([SupplementalTableService], (service: SupplementalTableService) => {
    expect(service).toBeTruthy();
  }));
});
