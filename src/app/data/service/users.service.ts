import { inject, Injectable, OnInit } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { User } from '../interface/users.interface';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Injectable({
  providedIn: 'root',

})
export class UsersService {
  public usersApi = inject(UsersApiService)
  users: User[] = []
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  constructor() { 
    this.usersApi.getUsers().subscribe((user: any) => {
      this.users = user; 
      for(let userStorage of this.users) {
        this.setItem('users', userStorage)
      }
    });
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
