import { CharacterClassService } from './character-class.service';
import { SupplementalTableService } from './supplemental-table.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LifeEventService {

  constructor(
    private supplementalTableService: SupplementalTableService,
  ) { }

  getRandomLifeEventsData(): any {
    const roll = this.supplementalTableService.roll(1, 100);
    const lifeEvents = this.getRandomLifeEventsFromRoll(roll);
    const currentAge = this.getCurrentAgeFromLifeEventsRoll(roll);
    return {
      lifeEvents: lifeEvents,
      currentAge: currentAge,
    };
  }

  getRandomLifeEvents(numEvents: number): string[] {
    let events: string[] = [];
    for (let i = 0; i < numEvents; i++) {
      const eventRoll = this.supplementalTableService.roll(1, 100);
      events[i] = this.getRandomEvent(eventRoll);
    }
    return events;
  }

  getRandomLifeEventsFromRoll(roll: number): string[] {
    const numEvents = this.getNumberOfLifeEvents(roll);
    return this.getRandomLifeEvents(numEvents);
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
      return 'You gained a bit of good fortune. ' + this.getRandomBoon();
    } else if (roll <= 30) {
      return 'You fell in love or got married. If you get this result more than once, you can choose to have a child instead. ' +
        'Work with your DM to determine the identity of your love interest.';
    } else if (roll <= 40) {
      const blameRoll = this.supplementalTableService.roll(1, 6);
      let toBlame = true;
      if (blameRoll % 2 === 0) {
        toBlame = false;
      }
      const alignment = this.supplementalTableService.getRandomAlignment();
      const enemyClass = this.supplementalTableService.getRandomClass();
      const enemyRace = this.supplementalTableService.getRandomRace();
      const enemyInfo = `They are a(n) ${alignment} ${enemyRace} ${enemyClass}.`;
      return `You made an enemy of an adventurer. You are ${toBlame ? 'not' : ''} to blame for making them your enemy.` +
        enemyInfo +
        ' Work with your DM to determine this hostile character\'s identity and the danger this enemy poses to you.';
    } else if (roll <= 50) {
      const alignment = this.supplementalTableService.getRandomAlignment();
      const friendClass = this.supplementalTableService.getRandomClass();
      const friendRace = this.supplementalTableService.getRandomRace();
      const friendInfo = `They are a(n) ${alignment} ${friendRace} ${friendClass}.`;
      return 'You made a friend of an adventurer. ' + friendInfo +
        ' Work with your DM to add more detail to this friendly character and establish how your friendship began.';
    } else if (roll <= 70) {
      const gold = this.supplementalTableService.roll(2, 6);
      return `You Spent time working in a job related to your background. Start the game with an extra ${gold} gp.`;
    } else if (roll <= 75) {
      const alignment = this.supplementalTableService.getRandomAlignment();
      const occupation = this.supplementalTableService.getRandomOccupation();
      const relationship = this.supplementalTableService.getRandomRelationship();
      const race = this.supplementalTableService.getRandomRace();
      const status = this.supplementalTableService.getRandomStatus();
      const vipInfo = `${relationship} towards you, they are a(n) ${alignment} ${race} ${occupation}. Their status: ${status}`;
      return 'You met someone important. ' + vipInfo +
        ' Work out additional details with your DM as needed to fit this character into your backstory.';
    } else if (roll <= 80) {
      return 'You went on an adventure. ' + this.getRandomAdventure();
    } else if (roll <= 85) {
      return 'You had a supernatural experience. ' + this.getRandomSupernaturalEvent();
    } else if (roll <= 90) {
      const warInfo = this.getRandomWarOutcome();
      return 'You fought in a battle. ' + warInfo +
        ' Work with your DM to come up with the reason for the battle and the factions involved.' +
        'It might have been a small conflict between your community and a band oforcs, or it ' +
        'could have been a major battle in a larger war.';
    } else if (roll <= 95) {
      const crime = this.getRandomCrime();
      const punishment = this.getRandomPunishment();
      return `You were accused of committing the following crime: ${crime}. ${punishment}`;
    } else if (roll <= 99) {
      const arcaneInfo = this.getRandomArcaneMatters();
      return 'You encountered something magical. ' + arcaneInfo;
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
      return 'You contracted a disease while exploring a filthy warren. You recovered from the disease, but you have a persistent cough, ' +
        'pockmarks on your skin, or prematurely gray hair.';
    } else if (roll <= 50) {
      return 'You were poisoned by a trap or a monster. You recovered, but the next time you must make a saving throw against poison, ' +
        'you make the saving throw with disadvantage.';
    } else if (roll <= 60) {
      return 'You lost something of sentimental value to you during your adventure. Remove one trinket from your possessions.';
    } else if (roll <= 70) {
      return 'You were terribly frightened by something you encountered and ran away, abandoning your companions to their fate.';
    } else if (roll <= 80) {
      return 'You learned a great deal during your adventure. The next time you make an ability check or a saving throw, you have ' +
        'advantage on the roll.';
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
      return 'A friendship ended bitterly, and the other person is now hostile to you. The cause might have been a misunderstanding or ' +
        'something you or the former friend did.';
    } else if (roll <= 4) {
      return 'You lost all your possessions in a disaster, and you had to rebuild your life.';
    } else if (roll <= 5) {
      const years = this.supplementalTableService.roll(1, 6);
      return `You were imprisoned for a crime you didn’t commit and spent ${years} years at hard labor, in jail, or shackled to an ` +
        'oar in a slave galley.';
    } else if (roll <= 6) {
      return 'War ravaged your home community, reducing everything to rubble and ruin. in the aftermath, you either helped your town ' +
        'rebuild or moved somewhere else.';
    } else if (roll <= 7) {
      return 'A lover disappeared without a trace. You have been looking for that person ever since.';
    } else if (roll <= 8) {
      return 'A terrible blight in your home community caused crops to fail, and many starved. You lost a sibling or some other family ' +
        'member.';
    } else if (roll <= 9) {
      return 'You did something that brought terrible shame to you in the eyes of your family. You might have been involved in a ' +
        'scandal, dabbled in dark magic, or offended someone important. The attitude of your family members toward you becomes ' +
        'indifferent at best, though they might eventually forgive you. ';
    } else if (roll <= 10) {
      return 'For a reason you were never told, you were exiled from your community. You then either wandered in the wilderness for a ' +
        'time or promptly found a new place to live.';
    } else if (roll <= 11) {
      const loveRoll = this.supplementalTableService.roll(3, 6);
      let endedWell = false;
      if (loveRoll % 2 === 0) {
        endedWell = true;
      }
      return `A romantic relationship ended. It ended ${endedWell ? 'amicably.' : 'with hurt feelings.'}`;
    } else {
      return 'A current or prospective romantic partner of yours died. Roll on the Cause of Death supplemental table to find out how. ' +
        'If the result is murder, roll a d12. On a 1, you were responsible, whether directly or indirectly.';
    }
  }

  getRandomBoon(): string {
    const roll = this.supplementalTableService.roll(1, 10);
    if (roll <= 1) {
      return 'A friendly wizard gave you a spell scroll containing one cantrip (of the DM\'s choice).';
    } else if (roll <= 2) {
      return 'You saved the life of a commoner, who now owes you a life debt. This individual accompanies you on your travels and ' +
        'performs mundane tasks for you, but will leave if neglected, abused, or imperiled. Determine details about this character ' +
        'by using the supplemental tables and working with your DM.';
    } else if (roll <= 3) {
      return 'You found a riding horse.';
    } else if (roll <= 4) {
      const gold = this.supplementalTableService.roll(1, 20);
      return `You found some money. You have ${gold} gp in addition to your regular starting funds.`;
    } else if (roll <= 5) {
      return 'A relative bequeathed you a simple weapon of your choice.';
    } else if (roll <= 6) {
      return 'You found something interesting. You gain one additional trinket.';
    } else if (roll <= 7) {
      return 'You once performed a service for a local temple. The next time you visit the temple, you can receive healing up to ' +
        'your hit point maximum.';
    } else if (roll <= 8) {
      return 'A friendly alchemist gifted you with a potion of healing or a flask of acid, as you choose.';
    } else if (roll <= 9) {
      return 'You found a treasure map.';
    } else {
      const years = this.supplementalTableService.roll(1, 20);
      return `A distant relative left you a stipend that enables you to live at the comfortable lifestyle for ${years} years. If ' +
        'you choose to live at a higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period.`;
    }
  }

  getRandomSupernaturalEvent(): string {
    const roll = this.supplementalTableService.roll(1, 100);
    if (roll <= 5) {
      const years = this.supplementalTableService.roll(1, 6);
      return `You were ensorcelled by a fey and enslaved for ${years} years before you escaped.`;
    } else if (roll <= 10) {
      return 'You saw a demon and ran away before it could do anything to you.';
    } else if (roll <= 15) {
      const gold = this.supplementalTableService.roll(1, 20) + 50;
      return `A devil tempted you. Make a DC 10 Wisdom saving throw. On a failed save, your alignment shifts one step toward ` +
        `evil (ifit‘s not evil already), and you start the game with an additional ${gold} gp.`;
    } else if (roll <= 20) {
      return 'You woke up one morning miles from your home, with no idea how you got there.';
    } else if (roll <= 30) {
      return 'You visited a holy site and felt the presence of the divine there.';
    } else if (roll <= 40) {
      return 'You witnessed a falling red star, a face appearing in the frost, or some other bizarre happening. ' + 
        'You are certain that it was an omen of some sort.';
    } else if (roll <= 50) {
      return 'You escaped certain death and believe it was the intervention of a god that saved you.';
    } else if (roll <= 60) {
      return 'You witnessed a minor miracle.';
    } else if (roll <= 70) {
      return 'You explored an empty house and found it to be haunted.';
    } else if (roll <= 75) {
      const possessedRoll = this.supplementalTableService.roll(1, 6);
      let creature: string;
      switch (possessedRoll) {
        case 1:
          creature = 'a celestial';
          break;
        case 2:
          creature = 'a devil';
          break;
        case 3:
          creature = 'a demon';
          break;
        case 4:
          creature = 'a fey';
          break;
        case 5:
          creature = 'an elemental';
          break;
        case 6:
          creature = 'an undead';
          break;
      }
      return `You were briefly possessed by ${creature}`;
    } else if (roll <= 80) {
      return 'You saw a ghost.';
    } else if (roll <= 85) {
      return 'You saw a ghoul feeding on a corpse.';
    } else if (roll <= 90) {
      return 'A celestial or a fiend visited you in your dreams to give a warning of dangers to come.';
    } else if (roll <= 95) {
      return 'You briefly visited the Feywild or the Shadowfell.';
    } else {
      return 'You saw a portal that you believe leads to another plane of existence.';
    }
  }

  getRandomWarOutcome(): string {
    const roll = this.supplementalTableService.roll(1, 12);
    if (roll <= 1) {
      return 'You were knocked out and left for dead. You woke up hours later with no recollection of the battle.';
    } else if (roll <= 3) {
      return 'You were badly injured in the fight, and you still bear the awful scars ofthose wounds.';
    } else if (roll <= 4) {
      return 'You ran away from the battle to save your life, but you still feel shame for your cowardice.';
    } else if (roll <= 7) {
      return 'You suffered only minor injuries, and the wounds all healed without leaving scars.';
    } else if (roll <= 9) {
      return 'You survived the battle, but you suffer from terrible nightmares in which you relive the experience.';
    } else if (roll <= 11) {
      return 'You escaped the battle unscathed, though many of your Friends were injured or lost.';
    } else {
      return 'You acquitted yourselfwell in battle and are remembered as a hero. You might have received a medal for your bravery.';
    }
  }

  getRandomCrime(): string {
    const roll = this.supplementalTableService.roll(1, 8);
    if (roll === 1) {
      return 'Murder';
    } else if (roll === 2) {
      return 'Theft';
    } else if (roll === 3) {
      return 'Burglary';
    } else if (roll === 4) {
      return 'Assault';
    } else if (roll === 5) {
      return 'Smuggling';
    } else if (roll === 6) {
      return 'Kidnapping';
    } else if (roll === 7) {
      return 'Extortion';
    } else if (roll === 8) {
      return 'Counterfeiting';
    }
  }

  getRandomPunishment(): string {
    const roll = this.supplementalTableService.roll(1, 12);
    if (roll <= 3) {
      return 'You did not commit the crime and were exonerated after being accused.';
    } else if (roll <= 6) {
      return 'You committed the crime or helped do so, but nonetheless the authorities found you not guilty.';
    } else if (roll <= 8) {
      return 'You were nearly caught in the act. You had to flee and are wanted in the community where the crime occurred.';
    } else {
      const years = this.supplementalTableService.roll(1, 4);
      return `You were caught and convicted. You spent time in jail, chained to an oar, or performing hard labor. ` +
      `You served a sentence of ${years} years or succeeded in escaping after that much time.`;
    }
  }

  getRandomArcaneMatters(): string {
    const roll = this.supplementalTableService.roll(1, 10);
    if (roll === 1) {
      return 'You were charmed or frightened by a spell.';
    } else if (roll === 2) {
      return 'You were injured by the effect of a spell.';
    } else if (roll === 3) {
      return 'You witnessed a powerful spell being cast by a cleric, a druid, a sorcerer, a warlock, or a wizard.';
    } else if (roll === 4) {
      return 'You drank a potion (of the DM\'s choice).';
    } else if (roll === 5) {
      return 'You found a spell scroll (of the DM\'s choice) and succeeded in casting the Spell it contained.';
    } else if (roll === 6) {
      return 'You were affected by teleportation magic.';
    } else if (roll === 7) {
      return 'You turned invisible for a time.';
    } else if (roll === 8) {
      return 'You identified an illusion for what it was.';
    } else if (roll === 9) {
      return 'You saw a creature being conjured by magic.';
    } else if (roll === 10) {
      const events = this.getRandomLifeEvents(2);
      return 'Your fortune was read by a diviner. The DM picks one of the following two events as a portent ' +
      `of your future (which might or might not come true): 1) ${events[0]} OR 2) ${events[1]}`;
    }
  }

  getRandomWeirdStuff(): string {
    const roll = this.supplementalTableService.roll(1, 12);
    if (roll <= 1) {
      const weeks = this.supplementalTableService.roll(1, 4);
      return `You were turned into a toad and remained in that form for ${weeks} weeks.`;
    } else if (roll === 2) {
      return 'You were petrified and remained a stone statue for a time until someone freed you.';
    } else if (roll === 3) {
      const years = this.supplementalTableService.roll(1, 6);
      return `You were enslaved by a hag, a satyr, or some other being and lived in that creature’s thrall for ${years} years.`;
    } else if (roll === 4) {
      const months = this.supplementalTableService.roll(1, 4);
      return `A dragon held you as a prisoner for ${months} month(s) until adventurers killed it.`;
    } else if (roll === 5) {
      return 'You were taken captive by a race of evil humanoids such as drow, kuo-toa, or quaggoths. '
      + 'You lived as a slave in the Underdark until you escaped.';
    } else if (roll === 6) {
      const alignment = this.supplementalTableService.getRandomAlignment();
      const friendClass = this.supplementalTableService.getRandomClass();
      const friendRace = this.supplementalTableService.getRandomRace();
      const friendInfo = `The adventurer: ${status}! You knew them as a(n) ${alignment} ${friendRace} ${friendClass}.`;
      return 'You served a powerful adventurer as a hireling. You have only recently left that service. '
      + ' Work with your DM to determine the additional details about your former employer.';
    } else if (roll === 7) {
      const years = this.supplementalTableService.roll(1, 6);
      return `You went insane for ${years} years and recently regained your sanity. A tic or some other bit of odd behavior might linger.`;
    } else if (roll === 8) {
      return 'A lover of yours was secretly a silver dragon.';
    } else if (roll === 9) {
      return 'You were captured by a cult and nearly sacrificed on an altar to the foul being the cultists served. ' +
        'You escaped, but you fear they will find you.';
    } else if (roll === 10) {
      return 'You met a demigod, an archdevil, an archfey, a demon lord, or a titan, and you lived to tell the tale.';
    } else if (roll === 11) {
      return 'You were swallowed by a giant fish and spent a month in its gullet before you escaped.';
    } else {
      return 'A powerful being granted you a wish, but you squandered it on something frivolous.';
    }
  }
}


// getRandomAdventure(roll: number): string {
  // if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else if (roll <= ) {
  //   return '';
  // } else {
  //   return '';
  // }
// }
