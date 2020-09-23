import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersEpisodesComponent } from './characters-episodes/characters-episodes.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'characters', component:CharactersComponent
  },
  {
    path:'locations',component:LocationsComponent  
  },
  {
    path:'characters/:name'  ,component:CharactersComponent
  },
  {
    path:'residents/:id',component:ResidentsComponent
  },
  {
    path:'character/:id',component:CharacterDetailComponent
  },
  {
    path:'episode',component:EpisodeComponent 
  },
  {
    path:'characters-episodes/:id',component:CharactersEpisodesComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
