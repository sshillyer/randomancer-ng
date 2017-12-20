import { TestBed, inject } from '@angular/core/testing';

import { CharacterRaceService } from './character-race.service';

describe('CharacterRaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterRaceService]
    });
  });

  it('should be created', inject([CharacterRaceService], (service: CharacterRaceService) => {
    expect(service).toBeTruthy();
  }));
});
