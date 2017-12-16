import { Injectable } from '@angular/core';
import { Background } from './background';
import { CHAR_BACKGROUNDS } from './data/background-data';

@Injectable()
export class BackgroundService {

  constructor() { }

  getRandomBackground(roll: number): Background {
    return CHAR_BACKGROUNDS[roll];
  }
}
