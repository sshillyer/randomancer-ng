import { Injectable } from '@angular/core';
import { CharacterStory } from './character-story/character-story';
import { CHAR_RACES } from './data/race-data';

@Injectable()
export class CharacterStoryService {

  constructor() { }

  getRandomCharacterStory() {
    return {
      race: this.getRandomRace(),
      class: 'Barbarian',
    };
  }

  getRandomRace(): string {
    return CHAR_RACES[Math.floor(Math.random() * CHAR_RACES.length)];
  }
}
