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
      return 'You suffered a tragedy. Roll on the Tragedies table.';
    } else if (roll <= 20) {
      return 'You gained a bit of good fortune. Roll on the Boons table.';
    } else if (roll <= 30) {
      return 'You fell in love or got married. lfyou get this result more than once, you can choose to have a child instead. Work with your DM to determine the identity of your love interest.';
    } else if (roll <= 40) {
      return 'You made an enemy of an adventurer. Roll a d6. An odd number indicates you are to blame for the rift, and an even number indicates you are blameless. Use the supplemental tables and work with your DM to determine this hostile character\'s identity and the danger this enemy poses to you.';
    } else if (roll <= 50) {
      return 'You made a friend of an adventurer. Use the supplemental tables and work with your DM to add more detail to this friendly character and establish how your friendship began.';
    } else if (roll <= 70) {
      return 'You Spent time working in a job related to your background. Start the game with an extra 2d6 gp.';
    } else if (roll <= 75) {
      return 'You met someone important. Use the supplemental tables to determine this character\'s identity and how this individual feels about you. Work out ad ditional details with your DM as needed to fit this character into your backstory.';
    } else if (roll <= 80) {
      return 'You went on an adventure. Roll on the Adventures table to see what happened to you. Work with your DM to determine the nature ofthe adventure and the creatures you encountered.';
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

}
