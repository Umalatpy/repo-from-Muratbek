import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UsersApiService } from './users-api.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private users: User[] = [];
  usersChange = new Subject<User[]>();

  getUsers() {
    const usersJson = localStorage.getItem('users');
    const usersArr = JSON.parse(usersJson!);

    if (usersJson && usersArr.length) {
      this.users = usersArr;
      this.usersChange.next(usersArr);
    } else {
      this.usersApiService.fetchUsers().subscribe((usersArr) => {
        this.users = usersArr;
        this.saveUsers();
      });
    }
  }

  addUser(newUser: User) {
    this.users = [...this.users, newUser];
    this.saveUsers();
  }

  updateUser(updatedUser: User) {
    this.users = this.users.map((user) =>
      user.id !== updatedUser.id ? user : updatedUser
    );
    this.saveUsers();
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    this.saveUsers();
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
    this.usersChange.next([...this.users]);
  }

  constructor(private usersApiService: UsersApiService) {}
}
