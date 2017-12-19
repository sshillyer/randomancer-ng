import { Injectable } from '@angular/core';

@Injectable()
export class SupplementalTableService {

  constructor() { }


  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  roll(num: number, size: number): number {
    let total = 0;
    for (let i = 0; i < num; i++) {
      total += this.getRandomInt(1, size);
    }
    return total;
  }

  getRandomAlignment(): string {
    const roll = this.roll(3, 6);
    const splitRoll = this.roll(1,2);
    if (roll <= 3) {
      if (splitRoll === 1) {
        return 'chaotic evil';
      }
        return 'chaotic neutral';
    } else if (roll <= 5) {
      return 'lawful evil';
    } else if (roll <= 8) {
      return 'neutral evil';
    } else if (roll <= 12) {
      return 'neutral';
    } else if (roll <= 15) {
      return 'neutral good';
    } else if (roll <= 17) {
      if (splitRoll === 1) {
        return 'lawful good';
      }
      return 'lawful neutral';
    } else if (roll <= 18) {
      if (splitRoll === 1) {
        return 'chaotic good';
      }
      return 'chaotic neutral';
    }
  }

  getRandomOccupation(): string {
    const roll = this.roll(1, 100);
    if (roll <= 5) {
       return 'Academic';
    } else if (roll <= 10) {
      return this.getRandomClass();
    } else if (roll <= 11) {
       return 'Aristocrat';
     } else if (roll <= 26) {
       return 'Artisan or guild member';
     } else if (roll <= 31) {
       return 'Criminal';
     } else if (roll <= 36) {
       return 'Entertainer';
     } else if (roll <= 38) {
       return 'Exile, hermit, or refugee';
     } else if (roll <= 43) {
       return 'Explorer or wanderer';
     } else if (roll <= 55) {
       return 'Farmer or herder';
     } else if (roll <= 60) {
       return 'Hunter or trapper';
     } else if (roll <= 75) {
       return 'Laborer';
      } else if (roll <= 80) {
       return 'Merchant';
      } else if (roll <= 85) {
       return 'Politician or bureaucrat';
      } else if (roll <= 90) {
       return 'Priest';
      } else if (roll <= 95) {
       return 'Sailor';
      } else {
       return 'Soldier';
      }
    }

    getRandomClass(): string {
      const roll = this.roll(1, 100);
      if (roll <= 7) {
        return 'Barbarian';
      } else if (roll <= 14) {
        return'Bard';
      } else if (roll <= 29) {
        return'Cleric';
      } else if (roll <= 36) {
        return'Druid';
      } else if (roll <= 52) {
        return'Fighter';
      } else if (roll <= 58) {
        return'Monk';
      } else if (roll <= 64) {
        return'Paladin';
      } else if (roll <= 70) {
        return'Ranger';
      } else if (roll <= 84) {
        return'Rogue';
      } else if (roll <= 89) {
        return'Sorcerer';
      } else if (roll <= 94) {
        return'Warlock';
      } else {
        return'Wizard';
      }
    }

    getRandomStatus(): string {
      const roll = this.roll(3, 6);
      if (roll <= 3) {
        const cause = this.getRandomCauseOfDeath();
        return `Dead (${cause})`;
      } else if (roll <= 5) {
        return 'Missing or unknown';
      } else if (roll <= 6) {
        return 'Alive, but doing poorly due to injury, financial trouble, or relationship difficulties';
      } else if (roll <= 12) {
        return 'Alive and well';
      } else if (roll <= 15) {
        return 'Alive and quite successful';
      } else if (roll <= 17) {
        return 'Alive and infamous';
      } else {
        return 'Alive and famous';
      }
    }

    getRandomRelationship(): string {
      const roll = this.roll(3, 4);
      if (roll <= 4) {
        return 'Hostile';
      } else if (roll <= 10) {
        return 'Friendly';
      } else {
        return 'Indifferent';
    }
  }

    getRandomBirthOrder(): string {
      const roll = this.roll(2, 6);
      if (roll <= 2) {
        return 'Your twin, triplet, or quadruplet';
      } else if (roll <= 7) {
        return 'Older than you';
      } else {
        return 'Younger than you';
      }
    }

    getRandomCauseOfDeath(): string {
      const roll = this.roll(1, 12);
      if (roll <= 1) {
        return 'Unknown';
      } else if (roll <= 2) {
        return 'Murdered';
      } else if (roll <= 3) {
        return 'Killed in battle';
      } else if (roll <= 4) {
        return 'Accident related to class or occupation';
      } else if (roll <= 5) {
        return 'Accident unrelated to class or occupation';
      } else if (roll <= 6) {
        return 'Natural causes, such as disease or old age';
      } else if (roll <= 7) {
        return 'Apparent suicide';
      } else if (roll <= 8) {
        return 'Torn apart by an animal or a natural disaster';
      } else if (roll <= 9) {
        return 'Consumed by a monster';
      } else if (roll <= 10) {
        return 'Executed for a crime or tortured to death';
      } else if (roll <= 11) {
        return 'Bizarre event, such as being hit by a meteorite';
      } else {
        return 'Struck down by an angry god, or killed by a hatching slaad egg';
      }
    }
}
