import {Injectable} from '@angular/core';
import { User } from './users-api.service';


@Injectable()
export class UsersService {
public id?: number

users: User[] = [];

addUser() {
  console.log('added User');
}

deleteUser(userId:number) {  
  this.users = this.users.filter((user) => user.id !== userId)
  console.log(`deleted user number ${userId} `);
}

editUser() {
  console.log('edited user');
  }
}
