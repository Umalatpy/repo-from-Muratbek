import {Injectable} from '@angular/core';
import { User } from './users-api.service';


@Injectable()
export class UsersService {
public id?: number

users: User[] = [];

addUser() {
  console.log('added User');
}

// deleteUser(userId: number) {
// console.log('deleted user');
// }

deleteUser() {  
  console.log(`deleted user`);

//   let number = 1;
//   let newArr;

// if (number === 1) { 
//   newArr = this.users.filter((User) => typeof(User) === 'object' && User.id !== 1); 
//    console.log(newArr);
// }


}

editUser() {
  console.log('edited user');
  }
}
