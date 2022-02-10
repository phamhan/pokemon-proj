import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GameVersionResult, pokemon } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<GameVersionResult> {
    let url = `${environment.apiRoot}/${pokemon}`;
    return this.http.get<GameVersionResult>(url);
  }

}
