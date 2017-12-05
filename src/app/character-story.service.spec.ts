import { TestBed, inject } from '@angular/core/testing';

import { CharacterStoryService } from './character-story.service';

describe('CharacterStoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterStoryService]
    });
  });

  it('should be created', inject([CharacterStoryService], (service: CharacterStoryService) => {
    expect(service).toBeTruthy();
  }));
});
