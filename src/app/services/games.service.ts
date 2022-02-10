import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameVersionResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getVersions(): Observable<GameVersionResult> {
    return this.http.get<GameVersionResult>(`${environment.apiRoot}/version-group`);
  }

  getGenerations(): Observable<GameVersionResult> {
    return this.http.get<GameVersionResult>(`${environment.apiRoot}/generation`);
  }
}
