import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { CharacterServiceService } from './character/character-service/character-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {
  AllCharacters: Observable<any>;
  sub;
  name;
  error;

  constructor(private characterService: CharacterServiceService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      if (params.name != undefined) {
        this.name = params.name;
      }
    });
    this.onUrlChanged();
  }
  onUrlChanged() {
    if (this.name != undefined) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.getSingleCharacter(this.name);
        })
    }
  }
  ngOnInit() {
    if (this.verSiVinoPorParametro()) {
      this.getSingleCharacter(this.name);
      this.name = undefined;
    } else {
      this.getAllCharacters();
    }
  }

  verSiVinoPorParametro() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    if (this.name != undefined) {
      return true;
    } else {
      return false;
    }
  }
  getAllCharacters() {
    this.characterService.getAllCharacters()
      .pipe(take(1))
      .subscribe((res: any) => {
        this.AllCharacters = res.results;
      })
  }
  getSingleCharacter(name) {
    this.characterService.getSingleCharacter(name)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.AllCharacters = res.results;
        this.error = undefined;
      }, error => {
          this.AllCharacters = null;
          this.error = 'Asegurate que tu personaje se escriba así o exista!';
      })
      
       
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
