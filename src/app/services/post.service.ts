import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PostImg } from '../models/PostImg';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  imgUrl: string = 'https://picsum.photos/v2/list';

  avatarUrl: string = 'https://randomuser.me/api/?results=30';

  constructor(private http: HttpClient) { }
  getPostImg(): Observable<PostImg[]> {
    return this.http.get<PostImg[]>(`${this.imgUrl}`, httpOptions);
  }
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.avatarUrl}`, httpOptions);
  }

}
