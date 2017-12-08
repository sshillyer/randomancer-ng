import { SupplementalTableService } from './supplemental-table.service';
import { BirthplaceService } from './birthplace.service';
import { SiblingService } from './sibling.service';
import { Injectable } from '@angular/core';
import { CharacterStory } from './character-story/character-story';
import { CharacterClass } from './data/character-class';
import { CHAR_RACES } from './data/race-data';
import { CHAR_CLASSES } from './data/class-data';
import { CHAR_BACKGROUNDS } from './data/background-data';

@Injectable()
export class CharacterStoryService {

  constructor(
    private birthplaceService: BirthplaceService,
    private siblingService: SiblingService,
    private supplementalTableService: SupplementalTableService
  ) { }

  getRandomCharacterStory(): CharacterStory {
    const race = this.getRandomRace();
    const knowParents = this.getRandomKnowParents();
    const parentInfo = this.getRandomParents(race, knowParents);

    const charClass = this.getRandomClass();
    const background = this.getRandomBackground();
    const birthplace = this.getRandomBirthplace();
    const siblings = this.getRandomSiblings();

    return {
      race: race,
      class: charClass,
      background: background,
      knowParents: knowParents,
      parentInfo: parentInfo,
      birthplace: birthplace,
      siblings: siblings,
    };
  }

  getRandomRace(): string {
    const roll: number = this.supplementalTableService.getRandomInt(0, CHAR_RACES.length - 1);
    return CHAR_RACES[roll];
  }

  getRandomClass(): string {
    const classRoll: number = this.supplementalTableService.getRandomInt(0, CHAR_CLASSES.length - 1);
    const randClass = CHAR_CLASSES[classRoll];
    const subclassRoll: number = this.supplementalTableService.getRandomInt(0, randClass.subclasses.length - 1);
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
    const roll: number = this.supplementalTableService.getRandomInt(1, 100);
    if (roll <= 95) {
      return true;
    } else {
      return false;
    }
  }

  getRandomBirthplace(): string {
    const roll: number = this.supplementalTableService.getRandomInt(1, 100);
    return this.birthplaceService.getBirthplaceFromRoll(roll);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomSiblings(): string[] {
    const roll: number = this.supplementalTableService.getRandomInt(1, 10);
    let numberOfSiblings: number;
    if (roll <= 2) {
      numberOfSiblings = 0;
    } else if (roll <= 4) {
      numberOfSiblings = this.supplementalTableService.getRandomInt(1, 3);
    } else if (roll <= 6) {
      numberOfSiblings = this.supplementalTableService.getRandomInt(1, 4) + 1;
    } else if (roll <= 8) {
      numberOfSiblings = this.supplementalTableService.getRandomInt(1, 6) + 2;
    } else {
      numberOfSiblings = this.supplementalTableService.getRandomInt(1, 8) + 3;
    }
    return this.siblingService.getRandomSiblings(numberOfSiblings);

  }

  getRandomParents(race: string, knowParents: boolean): string {
    if (race === 'Half-Elf') {
      const roll = this.supplementalTableService.roll(1, 8);
      if (roll <= 5) {
        return 'One parent was an elfand the other was a human.';
      } else if (roll <= 6) {
        return 'One parent was an elf and the other was a half-elf.';
      } else if (roll <= 7) {
        return 'One parent was a human and the other was a halfelf.';
      } else {
        return 'Both parents were half—elves.';
      }
    } else if (race === 'Half-Orc') {
      const roll = this.supplementalTableService.roll(1, 8);
      if (roll <= 5) {
        return 'One parent was an orc and the other was a human.';
      } else if (roll <= 6) {
        return 'One parent was an ore and the other was a halforc.';
      } else if (roll <= 7) {
        return 'One parent was a human and the other was a halforc.';
      } else {
        return 'Both parents were half-orcs.';
      }
    } else if (race === 'Tiefling') {
      const roll = this.supplementalTableService.roll(1, 8);
      if (roll <= 5) {
        return 'Both parents were humans, their infernal heritage dormant until you came along.';
      } else if (roll <= 6) {
        return 'One parent was a tiefling and the other was a human.';
      } else if (roll <= 7) {
        return 'One parent was a tiefling and the other was a devil.';
      } else {
        return 'One parent was a human and the other was a devil.';
      }
    } else {
      return this.getRandomParentInfo(knowParents);
    }
  }

}
