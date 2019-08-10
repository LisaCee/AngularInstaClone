import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  avatarUrl: string = 'https://randomuser.me/api/?results=30';

  constructor(private http: HttpClient) { }


}
