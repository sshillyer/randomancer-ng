import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterStoryComponent } from './character-story/character-story.component';

const routes: Routes = [
  { path: '', redirectTo: 'character-story', pathMatch: 'full' },
  { path: 'character-story', component: CharacterStoryComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
