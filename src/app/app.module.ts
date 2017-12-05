import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VillainComponent } from './villain/villain.component';
import { CharacterStoryComponent } from './character-story/character-story.component';
import { CharacterStoryService } from './character-story.service';
import { BirthplaceService } from './birthplace.service';
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
    ]),
    AppRoutingModule
  ],
  providers: [ CharacterStoryService, BirthplaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
