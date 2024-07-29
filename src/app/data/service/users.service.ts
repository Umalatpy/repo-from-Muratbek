import { inject, Injectable, OnInit } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { User } from '../interface/users.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class UsersService {
  http = inject(HttpClient)
  public usersApi = inject(UsersApiService)
  users: User[] = []
  
  constructor() { }

  setUsers(users: User[]) {
    this.users = users;
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${this.usersApi.url}/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.usersApi.url}/${user.id}`, user);
  }
}
