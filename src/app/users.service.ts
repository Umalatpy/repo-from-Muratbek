import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [];

  setUsers(users: User[]): void {
    this.users = users;
  }
  getUsers(): User[] {
    return this.users;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    console.log('delete user');
  }

}
