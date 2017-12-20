import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';
import { Background } from './background';
import { CHAR_BACKGROUNDS } from './data/background-data';

@Injectable()
export class BackgroundService {

  constructor(
    private supplementalTableService: SupplementalTableService,
  ) { }

  getRandomBackground(): Background {
    const roll = this.supplementalTableService.getRandomInt(0, CHAR_BACKGROUNDS.length - 1);
    return this.getBackgroundFromIndex(roll);
  }

  getBackgroundFromIndex(i: number): Background {
    return CHAR_BACKGROUNDS[i];
  }

  getRandomBackgroundReasonFromBackground(background: Background): string {
    const roll = this.supplementalTableService.roll(0, 5);
    return background.reasons[roll];
  }
}
