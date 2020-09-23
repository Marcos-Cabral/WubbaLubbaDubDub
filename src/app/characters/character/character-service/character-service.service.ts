import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  url = 'https://rickandmortyapi.com/api/character/';
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getSingleCharacter(name) {
    const param = this.url+'?name='+name;
    return this.http.get<any>(param);
  }
  getSingleCharacterId(id) {
    const param = this.url+id;
    return this.http.get<any>(param);
  }
  getCharacterId(query) {
    return this.http.get<any>(query);
  }
  getCharacterById(query) {
    return this.http.get(query);
  }
}
