import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { CharacterServiceService } from '../characters/character/character-service/character-service.service';
import { EpisodeServiceService } from './episode-service.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  episodes;
  characters = [];
  constructor(private espisodeService:EpisodeServiceService,private characterService:CharacterServiceService) { }

  ngOnInit() {
    this.espisodeService.getAllEpisodes()
      .pipe(take(1))
      .subscribe((res: any) => {
        this.episodes = res.results;
        this.recorrerEpisodios(this.episodes);
    })
  }
  recorrerEpisodios(episodios) {
    episodios.forEach(element => {
      element.characters.forEach(character => {
        this.characterService.getCharacterById(character)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.characters.push(res.name);
      })
      });
    });
  }
 /* getCharactersById(characters) {
    characters.forEach(element => {
      console.log(element.characters);
      this.characterService.getCharacterById(element)
      .pipe(take(1))
      .subscribe((res: any) => {
        characters.push(res.name);
    })
    });
    
  }*/
}
