import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { User } from '../user';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';

import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService, private usersApiService: UsersApiService) { }

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((data: any) => {
      this.usersService.setUsers(data);
      this.users = this.usersService.getUsers();
    })
  }

  deleteUserFromList(id: number): void {
    this.usersService.deleteUser(id);
    this.users = this.usersService.getUsers();
  }

}
