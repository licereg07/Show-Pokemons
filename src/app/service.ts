import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, range } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return range(1, 168).pipe(
      mergeMap(id => this.http.get<Pokemon>(`${this.apiUrl}/${id}`)),
      toArray()
    );
  }
}
