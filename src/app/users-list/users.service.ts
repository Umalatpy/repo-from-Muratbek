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
        localStorage.setItem('users', JSON.stringify(usersArr));
        this.usersChange.next(usersArr);
      });
    }
  }

  addUser(newUser: User) {
    this.users = [...this.users, newUser];
    localStorage.setItem('users', JSON.stringify(this.users));
    this.usersChange.next([...this.users]);
  }

  updateUser(updatedUser: User) {
    this.users = this.users.map((user) =>
      user.id !== updatedUser.id ? user : updatedUser
    );
    localStorage.setItem('users', JSON.stringify(this.users));
    this.usersChange.next([...this.users]);
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.usersChange.next([...this.users]);
  }

  constructor(private usersApiService: UsersApiService) {}
}
