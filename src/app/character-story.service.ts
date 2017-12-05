import { BirthplaceService } from './birthplace.service';
import { Injectable } from '@angular/core';
import { CharacterStory } from './character-story/character-story';
import { CharacterClass } from './data/character-class';
import { CHAR_RACES } from './data/race-data';
import { CHAR_CLASSES } from './data/class-data';
import { CHAR_BACKGROUNDS } from './data/background-data';

@Injectable()
export class CharacterStoryService {

  constructor(private birthplaceService: BirthplaceService) { }

  getRandomCharacterStory(): CharacterStory {
    const race = this.getRandomRace();
    const charClass = this.getRandomClass();
    const background = this.getRandomBackground();
    const knowParents = this.getRandomKnowParents();
    const parentInfo = this.getRandomParentInfo(knowParents);
    const birthplace = this.getRandomBirthplace();

    return {
      race: race,
      class: charClass,
      background: background,
      knowParents: knowParents,
      parentInfo: parentInfo,
      birthplace: birthplace,
    };
  }

  getRandomRace(): string {
    const roll: number = this.getRandomInt(0, CHAR_RACES.length - 1);
    return CHAR_RACES[roll];
  }

  getRandomClass(): string {
    const classRoll: number = this.getRandomInt(0, CHAR_CLASSES.length - 1);
    const randClass = CHAR_CLASSES[classRoll];
    const subclassRoll: number = this.getRandomInt(0, randClass.subclasses.length - 1);
    const randSubclass = randClass.subclasses[subclassRoll];
    return randClass.name + ` (${randSubclass})`;
  }

  getRandomBackground(): string {
    return CHAR_BACKGROUNDS[Math.floor(Math.random() * CHAR_BACKGROUNDS.length)];
  }

  getRandomParentInfo(knowParents: boolean): string {
    if (knowParents) {
      return 'You know who your parents are or were.';
    } else {
      return 'You do not know who your parents were.';
    }
  }

  getRandomKnowParents(): boolean {
    const roll: number = this.getRandomInt(1, 100);
    if (roll <= 95) {
      return true;
    } else {
      return false;
    }
  }

  getRandomBirthplace(): string {
    const roll: number = this.getRandomInt(1, 100);
    return this.birthplaceService.getBirthplaceFromRoll(roll);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
