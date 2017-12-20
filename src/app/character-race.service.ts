import { CHAR_RACES } from './data/race-data';
import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CharacterRaceService {

  constructor(
    private supplementalTableService: SupplementalTableService
  ) { }

  getRaceFromRoll(roll: number): string {
    return CHAR_RACES[roll];
  }

  getRandomRace(): string {
    const roll = this.supplementalTableService.getRandomInt(0, CHAR_RACES.length - 1);
    return this.getRaceFromRoll(roll);
  }

}
