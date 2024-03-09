import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://jsonplaceholder.typicode.com/users"
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url)
  }

  toUpper(texto: string){
    return texto.toUpperCase()
  }
}
