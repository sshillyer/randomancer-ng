import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LifeEventService {

  constructor(
    private supplementalTableService: SupplementalTableService
  ) { }
  getRandomLifeEvents(numEvents: number): string[] {
    let events: string[] = [];
    for (let i = 0; i < numEvents; i++) {
      const eventRoll = this.supplementalTableService.roll(1, 100);
      events[i] = this.getRandomEvent(eventRoll);
    }
    return events;
  }

  getCurrentAgeFromLifeEventsRoll(roll: number): string {
    if (roll <= 20) {
      return '20 years or younger';
    } else if (roll <= 59) {
      return '21-30 years';
    } else if (roll <= 69) {
      return '31-40 years';
    } else if (roll <= 89) {
      return '41-50 years';
    } else if (roll <= 99) {
      return '51-60 years';
    } else {
      return '61 years or older';
    }
  }

  getNumberOfLifeEvents(roll: number): number {
    if (roll <= 20) {
      return 1;
    } else if (roll <= 59) {
      return this.supplementalTableService.roll(1, 4);
    } else if (roll <= 69) {
      return this.supplementalTableService.roll(1, 6);
    } else if (roll <= 89) {
      return this.supplementalTableService.roll(1, 8);
    } else if (roll <= 99) {
      return this.supplementalTableService.roll(1, 10);
    } else {
      return this.supplementalTableService.roll(1, 12);
    }
  }

  getRandomEvent(roll: number): string {
    if (roll <= 10) {
      return 'You suffered a tragedy. ' + this.getRandomTragedy();
    } else if (roll <= 20) {
      return 'You gained a bit of good fortune. Roll on the Boons table.';
    } else if (roll <= 30) {
      return 'You fell in love or got married. lfyou get this result more than once, you can choose to have a child instead. Work with your DM to determine the identity of your love interest.';
    } else if (roll <= 40) {
      return 'You made an enemy of an adventurer. Roll a d6. An odd number indicates you are to blame for the rift, and an even number indicates you are blameless. Use the supplemental tables and work with your DM to determine this hostile character\'s identity and the danger this enemy poses to you.';
    } else if (roll <= 50) {
      return 'You made a friend of an adventurer. Use the supplemental tables and work with your DM to add more detail to this friendly character and establish how your friendship began.';
    } else if (roll <= 70) {
      const gold = this.supplementalTableService.roll(2, 6);
      return `You Spent time working in a job related to your background. Start the game with an extra ${gold} gp.`;
    } else if (roll <= 75) {
      return 'You met someone important. Use the supplemental tables to determine this character\'s identity and how this individual feels about you. Work out ad ditional details with your DM as needed to fit this character into your backstory.';
    } else if (roll <= 80) {
      return 'You went on an adventure. ' + this.getRandomAdventure();
    } else if (roll <= 85) {
      return 'You had a supernatural experience. Roll on the Supernatural Events table to find out what it was.';
    } else if (roll <= 90) {
      return 'You fought in a battle. Roll on the War table to leafn what happened to you. Work with your DM to come up with the reason for the battle and the factions involved. It might have been a small conflict between your community and a band oforcs, or it could have been a major battle in a larger war.';
    } else if (roll <= 95) {
      return 'You committed a crime or were wrongly accused of doing so. Roll on the Crime table to determine the nature ofthe offense and on the Punishment table to see what became of you.';
    } else if (roll <= 99) {
      return 'You encountered something magical. Roll on the Arcane Matters table.';
    } else {
      return 'Something truly strange happened to you. Roll on the Weird Stuff table.';
    }
  }

  getRandomAdventure(): string {
    const roll = this.supplementalTableService.roll(1, 100);
    if (roll <= 10) {
      const fingers = this.supplementalTableService.roll(1, 3);
      const toes = this.supplementalTableService.roll(1, 4);
      return `You nearly died. You have nasty scars on your body, and you are missing an ear, ${fingers} fingers, or ${toes} toes.`;
    } else if (roll <= 20) {
      return 'You suffered a grievous injury. Although the wound healed, it still pains you from time to time.';
    } else if (roll <= 30) {
      return 'You were wounded, but in time you fully recovered.';
    } else if (roll <= 40) {
      return 'You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have a persistent cough, pockmarks on your skin, or prematurely gray hair.';
    } else if (roll <= 50) {
      return 'You were poisoned by a trap or a monster. You recovered, but the next time you must make a saving throw against poison, you make the saving throw with disadvantage.';
    } else if (roll <= 60) {
      return 'You lost something of sentimental value to you during your adventure. Remove one trinket from your possessions.';
    } else if (roll <= 70) {
      return 'You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.';
    } else if (roll <= 80) {
      return 'You learned a great deal during your adventure. The next time you make an ability check or a saving throw, you have advantage on the roll.';
    } else if (roll <= 90) {
      const gold = this.supplementalTableService.roll(2, 6);
      return `You found some treasure on your adventure. You have ${gold} gp left from your share of it.`;
    } else if (roll <= 99) {
      const gold = this.supplementalTableService.roll(1, 20) + 50;
      return `You found a considerable amount of treasure on your adventure. You have ${gold} gp left from your share of it.`;
    } else {
      return 'You came across a common magic item (of the DM’s choice).';
    }
  }

  getRandomTragedy(): string {
    const roll = this.supplementalTableService.roll(1, 12);
    if (roll <= 2) {
      const cause = this.supplementalTableService.getRandomCauseOfDeath();
      return `A family member or a close friend died (${cause})`;
    } else if (roll <= 3) {
      return 'A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or something you or the former friend did.';
    } else if (roll <= 4) {
      return 'You lost all your possessions in a disaster, and you had to rebuild your life.';
    } else if (roll <= 5) {
      return 'You were imprisoned for a crime you didn’t commit and spent 1d6 years at hard labor, in jail, or shackled to an oar in a slave galley.';
    } else if (roll <= 6) {
      return 'War ravaged your home community, reducing everything to rubble and ruin. in the aftermath, you either helped your town rebuild or moved somewhere else.';
    } else if (roll <= 7) {
      return 'A lover disappeared without a trace. You have been looking for that person ever since.';
    } else if (roll <= 8) {
      return 'A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family member.';
    } else if (roll <= 9) {
      return 'You did something that brought terrible shame to you in the eyes of your family. You might have been involved in a scandal, dabbled in dark magic, or offended someone important. The attitude of your family members toward you becomes indifferent at best, though they might eventually forgive you. ';
    } else if (roll <= 10) {
      return 'For a reason you were never told, you were exiled from your community. You then either wandered in the wilderness for a time or promptly found a new place to live.';
    } else if (roll <= 11) {
      return 'A romantic relationship ended. Roll 3d6. An odd number means it ended with bad feelings, while an even number means it ended amicably.';
    } else {
      return 'A current or prospective romantic partner of yours died. Roll on the Cause of Death supplemental table to find out how. If the result is murder, roll a d12. On a 1, you were responsible, whether directly or indirectly.';
    }
  }

}


// getRandomAdventure(roll: number): string {
//   if (roll <= 10) {
//     return '';
//   } else if (roll <= 20) {
//     return '';
//   } else if (roll <= 30) {
//     return '';
//   } else if (roll <= 40) {
//     return '';
//   } else if (roll <= 50) {
//     return '';
//   } else if (roll <= 60) {
//     return '';
//   } else if (roll <= 70) {
//     return '';
//   } else if (roll <= 80) {
//     return '';
//   } else if (roll <= 90) {
//     return '';
//   } else if (roll <= 99) {
//     return '';
//   } else {
//     return '';
//   }
// }
