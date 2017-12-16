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
    const raceRoll = this.supplementalTableService.getRandomInt(0, CHAR_RACES.length - 1);
    const race = this.getRandomRace(raceRoll);

    const knowParentsRoll = this.supplementalTableService.getRandomInt(1, 100);
    const knowParents = this.getRandomKnowParents(knowParentsRoll);

    const familyRoll = this.supplementalTableService.getRandomInt(0, 100);
    const family = this.getRandomFamily(familyRoll);

    const halfbreedRoll = this.supplementalTableService.roll(1, 8);
    const parentInfo = this.getRandomParents(halfbreedRoll, race, knowParents);

    let absentParent = null;
    if (familyRoll >= 36 && familyRoll <= 75) {
      const absentParentRoll = this.supplementalTableService.roll(1, 4);
      absentParent = this.getRandomAbsentParent(absentParentRoll);
    }

    const charClass = this.getRandomClass();
    const background = this.getRandomBackground();
    const birthplace = this.getRandomBirthplace();
    const siblings = this.getRandomSiblings();

    return {
      race: race,
      class: charClass,
      background: background,
      family: family,
      absentParent: absentParent,
      knowParents: knowParents,
      parentInfo: parentInfo,
      birthplace: birthplace,
      siblings: siblings,
    };
  }

  getRandomRace(roll: number): string {
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

  getRandomFamily(roll: number): string {
    if (roll <= 1) {
      return 'None';
    } else if (roll <= 2) {
      return 'Institution, such as an asylum';
    } else if (roll <= 3) {
      return 'Temple';
    } else if (roll <= 5) {
      return 'Orphanage';
    } else if (roll <= 7) {
      return 'Guardian';
    } else if (roll <= 15) {
      return 'Paternal or maternal aunt, uncle, or both; or extended faamily such as tribe or clan';
    } else if (roll <= 25) {
      return 'Paternal or maternal grandparent(s)';
    } else if (roll <= 35) {
      return 'Adoptive family (same or different race)';
    } else if (roll <= 55) {
      return 'Single father or stepfather';
    } else if (roll <= 75) {
      return 'Single mother or stepmother';
    } else {
      return 'Mother and father';
    }
  }

  getRandomAbsentParent(roll: number): string {
    if (roll <= 1) {
      return 'Your parent died. '; // TODO: Append random cause of death
    }
  }

  getRandomParentInfo(knowParents: boolean): string {
    if (knowParents) {
      return 'You know who your parents are or were.';
    } else {
      return 'You do not know who your parents were.';
    }
  }

  getRandomKnowParents(roll: number): boolean {
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

  getRandomParents(halfbreedRoll: number, race: string, knowParents: boolean): string {
    if (race === 'Half-Elf') {
      if (halfbreedRoll <= 5) {
        return 'One parent was an elfand the other was a human.';
      } else if (halfbreedRoll <= 6) {
        return 'One parent was an elf and the other was a half-elf.';
      } else if (halfbreedRoll <= 7) {
        return 'One parent was a human and the other was a halfelf.';
      } else {
        return 'Both parents were half—elves.';
      }
    } else if (race === 'Half-Orc') {
      if (halfbreedRoll <= 5) {
        return 'One parent was an orc and the other was a human.';
      } else if (halfbreedRoll <= 6) {
        return 'One parent was an ore and the other was a halforc.';
      } else if (halfbreedRoll <= 7) {
        return 'One parent was a human and the other was a halforc.';
      } else {
        return 'Both parents were half-orcs.';
      }
    } else if (race === 'Tiefling') {
      if (halfbreedRoll <= 5) {
        return 'Both parents were humans, their infernal heritage dormant until you came along.';
      } else if (halfbreedRoll <= 6) {
        return 'One parent was a tiefling and the other was a human.';
      } else if (halfbreedRoll <= 7) {
        return 'One parent was a tiefling and the other was a devil.';
      } else {
        return 'One parent was a human and the other was a devil.';
      }
    } else {
      return this.getRandomParentInfo(knowParents);
    }
  }

}
