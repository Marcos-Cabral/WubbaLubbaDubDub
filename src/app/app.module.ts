import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { from } from 'rxjs';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './characters/character/character.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ResidentsComponent } from './residents/residents.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail/character-detail.component';
import { EpisodeComponent } from './episode/episode.component';
import { CharactersEpisodesComponent } from './characters-episodes/characters-episodes.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    CharactersComponent,
    CharacterComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    ResidentsComponent,
    CharacterDetailComponent,
    EpisodeComponent,
    CharactersEpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
