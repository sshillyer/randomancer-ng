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

  characterStory: CharacterStory;

  constructor(private characterStoryService: CharacterStoryService) { }

  ngOnInit() {
    this.getRandomCharacterStory();
  }

  getRandomCharacterStory(): void {
    this.characterStory = this.characterStoryService.getRandomCharacterStory();
  }

}
