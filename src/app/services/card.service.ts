import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Card } from '../models/Card';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
}
@Injectable({
  providedIn: 'root'
})
export class CardService {
  imgUrl: string = 'https://picsum.photos/v2/list';
  avatarUrl: string = 'https://randomuser.me/api/?results=30';

  constructor(private http: HttpClient) { }
  getData(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.imgUrl}`, httpOptions);
  }


}
