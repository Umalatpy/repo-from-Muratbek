import { Injectable } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { Users } from '../interface/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Users[] = []
  constructor(private usersApiService: UsersApiService) {}

  getUsers(): Observable<Users[]> {
    return this.usersApiService.getUsers();
  }

  deleteUser(id: number){
    this.users = this.users.filter(user => user.id !== id);
  }
}
