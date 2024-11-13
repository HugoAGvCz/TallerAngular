import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/RickAndMorty';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private body(data: any) {
    return JSON.stringify(data);
  }

  private header() {
    return {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  private url(endpoint: string) {
    return `https://rickandmortyapi.com/api/${endpoint}`
  }

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<Character[]> {
    return this.http.get<any>(
      this.url('character'),
      this.header()
    )
  }
}

