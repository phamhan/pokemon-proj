import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GameVersionResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<GameVersionResult> {
    const offset = [0, 10, 20, 30, 40 , 50, 60, 70, 80, 90, 100, 1000];
    const randomOffset = offset[Math.floor(Math.random() * offset.length)];
    const url = `${environment.apiRoot}/item?offset=${randomOffset}&limit=10`;
    return this.http.get<GameVersionResult>(url);
  }

}
