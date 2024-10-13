import { Injectable} from '@angular/core';
import { User } from './users-api.service';



@Injectable()
export class UsersService {

users: User[] = [];

addUser(newUser: any) {
  console.log('added User');
}

// deleteUser(userId: number) {
// console.log('deleted user');
// }

deleteUser(userId: number) {
  this.deleteUser(userId);
  console.log('deleted a user');
}

editUser() {
  console.log('edited user');
  }
}
