import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharacterServiceService } from '../characters/character/character-service/character-service.service';
import { EpisodeServiceService } from '../episode/episode-service.service';
import { ResidentsService } from '../residents/residents.service';

@Component({
  selector: 'app-characters-episodes',
  templateUrl: './characters-episodes.component.html',
  styleUrls: ['./characters-episodes.component.css']
})
export class CharactersEpisodesComponent implements OnInit {

  episode;
  characters = Array();
  constructor(private episodeService:EpisodeServiceService,private characterService:CharacterServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(take(1))
      .subscribe((params) => {
        const id = params['id'];
        this.setCharactersByLocationServiceId(id);        
        this.characters=this.characters.sort();       
    })
  }
 
  setCharactersByLocationServiceId(id) {
    this.episodeService.getEpisodeById(id)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.episode = res;
        this.getCharacters(res.characters);        
      });
  }
  getCharacters(array) {
    array.forEach(element => {
      this.characterService.getCharacterById(element)
      .pipe(take(1))
        .subscribe((res: any) => {
          this.characters.push(res);
      })
    });
  }
  compare(a,b) {
    if (a.id > b.name) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
}
