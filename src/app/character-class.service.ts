import { CHAR_CLASSES } from './data/class-data';
import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';
import { CharacterClass } from './data/character-class';

@Injectable()
export class CharacterClassService {

  constructor(
    private supplementalTableService: SupplementalTableService,
  ) { }

  getClassFromIndex(i: number) {
    return CHAR_CLASSES[i];
  }

  getRandomClass(): CharacterClass {
    const roll = this.supplementalTableService.getRandomInt(0, CHAR_CLASSES.length - 1);
    return this.getClassFromIndex(roll);
  }

  getRandomSubclassFromClass(charClass: CharacterClass): string {
    const subClassRoll = this.supplementalTableService.getRandomInt(0, charClass.subclasses.length - 1);
    return charClass.subclasses[subClassRoll];
  }

  getRandomClassReasonFromClass(charClass: CharacterClass): string {
    const classReasonRoll = this.supplementalTableService.roll(0, charClass.reasons.length - 1);
    return charClass.reasons[classReasonRoll];
  }
}
