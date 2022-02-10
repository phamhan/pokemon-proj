import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { GameVersionResult, pokemon, PokemonDetail, PokemonsFilter } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(filter: PokemonsFilter): Observable<GameVersionResult> {
    const url = `${environment.apiRoot}/${pokemon}`;

    if (filter?.textSearch?.length > 0) {
      return this.http.get<any>(`${url}/${filter.textSearch}`).pipe(
        map(res => {
          const data = {
            count: 1,
            next: null,
            previous: null,
            results: [{
              name: res.name,
              url: `${environment.apiRoot}/pokemon/${res.id}/`
            }]
          } as GameVersionResult;
          return data;
        })
      );
    }

    if (filter.url) {
      return this.http.get<GameVersionResult>(filter.url);
    }

    let params = new HttpParams();

    if (filter.offset) {
      params = params.set('offset', filter.offset.toString());
    }

    if (filter.limit) {
      params = params.set('limit', filter.limit.toString());
    }
    return this.http.get<GameVersionResult>(url, { params });
  }

  getPokemon(apiUrl?: string , id?: string): Observable<PokemonDetail> {
    if (apiUrl) {
      return this.http.get<PokemonDetail>(apiUrl);
    }
    const url = `${environment.apiRoot}/${pokemon}/${id}`;
    return this.http.get<PokemonDetail>(url);
  }
}
