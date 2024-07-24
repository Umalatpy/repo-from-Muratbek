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
  }

  addUser(user: User): void {
    this.users = [user, ...this.users];
  }

  editUser(user: User): void {
    this.users = this.users.map(u => u.id === user.id ? user : u);
  }
}
