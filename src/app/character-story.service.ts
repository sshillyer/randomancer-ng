import { Injectable } from '@angular/core';
import { CharacterStory } from './character-story/character-story';
import { CharacterClass } from './data/character-class';
import { CHAR_RACES } from './data/race-data';
import { CHAR_CLASSES } from './data/class-data';
import { CHAR_BACKGROUND } from './data/background-data';

@Injectable()
export class CharacterStoryService {

  constructor() { }

  getRandomCharacterStory() {
    return {
      race: this.getRandomRace(),
      class: this.getRandomClass(),
      background: this.getRandomBackground(),
    };
  }

  getRandomRace(): string {
    return CHAR_RACES[Math.floor(Math.random() * CHAR_RACES.length)];
  }

  getRandomClass(): string {
    const randClass = CHAR_CLASSES[Math.floor(Math.random() * CHAR_CLASSES.length)];
    const randSubclass = randClass.subclasses[Math.floor(Math.random() * randClass.subclasses.length)];
    return randClass.name + ` (${randSubclass})`;
  }

  getRandomBackground(): string {
    return CHAR_BACKGROUND[Math.floor(Math.random() * CHAR_BACKGROUND.length)];
  }
}
