import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  fetchUsers(searchStr: string = '') {
    const searchStrLower = searchStr.toLowerCase();

    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((usersArr) => {
          return usersArr.filter((user) => {
            const lowerUserName = user.name.toLowerCase();
            return lowerUserName.startsWith(searchStrLower);
          });
        })
      );
  }

  constructor(private http: HttpClient) {}
}
