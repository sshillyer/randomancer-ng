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

  constructor(private characterStoryService: CharacterStoryService) { }

  ngOnInit() {
    this.getRandomStory();
  }

  getRandomStory(): void {
    this.story = this.characterStoryService.getRandomCharacterStory();
  }

  makeLifeHarder(): void {
    this.story.race = 'Half-Drow';
    this.story.class = 'Fighter';
    this.story.parentInfo = 'Mother was raped by a drow';
    this.story.birthplace = 'Underdark';
    this.story.background = 'Urchin';
  }

}
