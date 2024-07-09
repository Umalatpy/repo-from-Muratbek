import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersListComponent } from '../components/users-list/users-list.component';


@Injectable({
  providedIn: 'root',
})
export class UsersApiService {

  constructor(private http: HttpClient){}
     
  getUsers() {
      this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((users: any) => {
      console.log(users);
      })
  }
}
