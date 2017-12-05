import { Injectable } from '@angular/core';
import { CharacterStory } from './character-story/character-story';

@Injectable()
export class CharacterStoryService {

  constructor() { }

  getRandomCharacterStory() {
    return {
      race: 'Half-Orc',
      class: 'Barbarian',
    };
  }
}
