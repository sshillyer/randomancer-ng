import { BackgroundService } from '../background.service';
import { CharacterRaceService } from '../character-race.service';
import { Component, OnInit } from '@angular/core';
import { CharacterStory } from './character-story';
import { CharacterStoryService } from '../character-story.service';

@Component({
  selector: 'app-character-story',
  templateUrl: './character-story.component.html',
  styleUrls: ['./character-story.component.css']
})
export class CharacterStoryComponent implements OnInit {
  header = 'Character Story Generator';

  story: CharacterStory;

  constructor(
    private characterStoryService: CharacterStoryService
  ) { }

  ngOnInit() {
    this.getRandomStory();
  }

  setRandomBackground(): void {
    this.story.background = this.characterStoryService.getRandomBackground();
    this.story.backgroundReason = this.characterStoryService.getRandomBackgroundReason(this.story.background);
  }

  setRandomClass(): void {
    this.story.charClass = this.characterStoryService.getRandomClass();
    this.story.charSubclass = this.characterStoryService.getRandomSubclassFromClass(this.story.charClass);
    this.story.classReason = this.characterStoryService.getRandomClassReasonFromClass(this.story.charClass);
  }

  setRandomLifeEvents(): void {
    const lifeEventData = this.characterStoryService.getRandomLifeEventsData();
    this.story.lifeEvents = lifeEventData.lifeEvents;
    this.story.currentAge = lifeEventData.currentAge;
  }

  getRandomStory(): void {
    this.story = this.characterStoryService.getRandomCharacterStory();
  }

  setRandomRace(): void {
    this.story.race = this.characterStoryService.getRandomRace();
  }


  makeLifeHarder(): void {
    this.story.race = 'Half-Drow';
    this.story.parentInfo = 'Mother was raped by a drow';
    this.story.birthplace = 'Underdark';
  }

}
