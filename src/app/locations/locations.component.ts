import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CharacterServiceService } from '../characters/character/character-service/character-service.service';
import { LocationsServiceService } from './locations-service/locations-service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  allLocations: Observable<any>;
  residentsNumber=[];
  locations = [];
  constructor(private locationService: LocationsServiceService, private characterService: CharacterServiceService) {
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getAllLocations()
      .pipe(take(1))
      .subscribe((res: any) => {
        this.allLocations = res.results;
        this.allLocations.forEach(element => {
          this.residentsNumber.push(element.residents.length);
        });
      })
  }
}
