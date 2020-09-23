import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharacterServiceService } from '../../character/character-service/character-service.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character;

  constructor(private route:ActivatedRoute, private characterService:CharacterServiceService) { }

  ngOnInit() {
    this.route.params.pipe(take(1))
      .subscribe((params) => {
        const id = params['id'];
        this.setCharacter(id);        
    })
  }

  setCharacter(id) {
    this.characterService.getSingleCharacterId(id)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.character = res;
    })
  }

}
