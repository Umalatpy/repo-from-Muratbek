import { Injectable } from '@angular/core';
import { UsersApiService } from './users-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: any
  // users: any;
  constructor(public get: UsersApiService) {}

  ngOnInit(): void {
    this.get
          .getUsers()
          .subscribe(
              (data) => (this.users = JSON.stringify(data))
          );
  }



}
