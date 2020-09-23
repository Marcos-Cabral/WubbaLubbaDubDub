import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { CharacterServiceService } from '../characters/character/character-service/character-service.service';
import { LocationsServiceService } from '../locations/locations-service/locations-service.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  location;
  residents=Array();

  constructor(private locationService:LocationsServiceService,private characterService:CharacterServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(take(1))
      .subscribe((params) => {
        const id = params['id'];
        this.setCharactersByLocationServiceId(id);
    })
    /*this.locationService.getLocationById(3)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.location = res;
        console.log(this.location);
        this.getCharacters(res.residents);
      });*/
  }

  getCharacters(array) {
    array.forEach(element => {
      this.characterService.getCharacterById(element)
      .pipe(take(1))
        .subscribe((res: any) => {
          this.residents.push(res);
      })
    });
  }
  setCharactersByLocationServiceId(id) {
    this.locationService.getLocationById(id)
      .pipe(take(1))
      .subscribe((res: any) => {
        this.location = res;
        this.getCharacters(res.residents);
        
      });
  }
  
}
