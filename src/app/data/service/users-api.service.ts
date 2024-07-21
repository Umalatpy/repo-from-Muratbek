import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { User } from '../interface/users.interface';



@Injectable({
  providedIn: 'root',
})


export class UsersApiService {
  http = inject(HttpClient)
  constructor() { }

  getUsers(): any {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
