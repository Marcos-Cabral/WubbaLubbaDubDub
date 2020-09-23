import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationsServiceService {
  url = 'https://rickandmortyapi.com/api/location';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getCharactersForLocation(url){
    return this.http.get<any>(url);
  }

  getLocationById(id){
    const url = this.url +'/'+ id;
    return this.http.get(url);
  }

}
