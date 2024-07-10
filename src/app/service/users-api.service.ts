import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersListComponent } from '../components/users-list/users-list.component';


@Injectable({
  providedIn: 'root',
})
export class UsersApiService {

  constructor(private http: HttpClient){}


  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

}

