import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UsersApiService } from './users-api.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers() {
    return this.users.slice();
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  constructor(private usersApiService: UsersApiService) {}
}
