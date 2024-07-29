import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { User } from '../interface/users.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class UsersApiService {
  http = inject(HttpClient)

  url: string = 'https://jsonplaceholder.typicode.com/users'
  // url: string = 'http://localhost:3000/products';
  constructor() { }

  getUsers() {
    return this.http.get<User[]>(this.url)
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  postUser(user: User) {
    return this.http.post<User>(this.url, user);
  }
  }
