import { Injectable } from '@angular/core';

@Injectable()
export class BirthplaceService {

  constructor() { }

  getBirthplaceFromRoll(roll: number): string {
    if (roll <= 50) {
        return 'Home';
    } else if (roll <= 55) {
      return 'Home of a family friend';
    } else if (roll <= 63) {
      return 'Home of a healer or midwife';
    } else if (roll <= 65) {
      return 'Carriage, cart, or wagon';
    } else if (roll <= 68) {
      return 'Barn, shed, or other outbuilding';
    } else if (roll <= 70) {
      return 'Cave';
    } else if (roll <= 72) {
        return 'Field';
    } else if (roll <= 74) {
        return 'Forest';
    } else if (roll <= 77) {
        return 'Temple';
    } else if (roll <= 78) {
        return 'Battlefield';
    } else if (roll <= 80) {
      return 'Alley or Street';
    } else if (roll <= 82) {
      return 'Brothel, tavern, or inn';
    } else if (roll <= 84) {
      return 'Castle, keep, tower, or palace';
    } else if (roll <= 85) {
      return 'Sewer or rubbish heap';
    } else if (roll <= 88) {
      return 'Among people of a different race';
    } else if (roll <= 91) {
      return 'On board a boat or a ship';
    } else if (roll <= 93) {
      return 'In a prison or in the headquarters of a secret organization';
    } else if (roll <= 95) {
      return 'In a sage\'s laboratory';
    }   else if (roll <= 96) {
      return 'In the Feywild';
    } else if (roll <= 97) {
      return 'In the Shadowfell';
    } else if (roll <= 98) {
      return 'On the astral Plane or the Ethereal Plane';
    } else if (roll <= 99) {
      return 'On an Inner Plane of your choice';
    } else if (roll <= 100) {
      return 'On an Outer Plane of your choice';
    }
  }
}

