import { TestBed, inject } from '@angular/core/testing';

import { SiblingService } from './sibling.service';

describe('SiblingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingService]
    });
  });

  it('should be created', inject([SiblingService], (service: SiblingService) => {
    expect(service).toBeTruthy();
  }));
});
