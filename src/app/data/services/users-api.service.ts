import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users.interface';


@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(`${this.apiUrl}/users`); 
  }
  
}
