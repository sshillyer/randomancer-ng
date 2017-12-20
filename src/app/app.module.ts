import { CharacterClassService } from './character-class.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VillainComponent } from './villain/villain.component';
import { CharacterRaceService } from './character-race.service';
import { CharacterStoryComponent } from './character-story/character-story.component';
import { CharacterStoryService } from './character-story.service';
import { BackgroundService } from './background.service';
import { BirthplaceService } from './birthplace.service';
import { LifeEventService } from './life-event.service';
import { SiblingService } from './sibling.service';
import { SupplementalTableService } from './supplemental-table.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    VillainComponent,
    CharacterStoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'villain', component: VillainComponent },
      { path: 'character-story', component: CharacterStoryComponent },
    ]),
    AppRoutingModule
  ],
  providers: [
    BackgroundService,
    BirthplaceService,
    CharacterClassService,
    CharacterRaceService,
    CharacterStoryService,
    LifeEventService,
    SiblingService,
    SupplementalTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
