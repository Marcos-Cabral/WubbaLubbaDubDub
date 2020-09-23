import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService {
  url='https://rickandmortyapi.com/api/episode/';
  
  constructor(private http:HttpClient) { }

  getAllEpisodes() {
    return this.http.get(this.url);
  }
  getEpisodeById(id) {
    const url=this.url+id;
    return this.http.get(url);
  }


}
