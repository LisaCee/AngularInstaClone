import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PostImg } from '../models/PostImg';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  imgUrl: string = 'https://picsum.photos/v2/list';


  constructor(private http: HttpClient) { }
  getPostImg(): Observable<PostImg[]> {
    return this.http.get<PostImg[]>(`${this.imgUrl}`, httpOptions);
  }


}
