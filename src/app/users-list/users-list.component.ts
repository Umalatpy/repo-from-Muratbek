import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UserCardComponent } from './user-card/user-card.component';
import { NgFor } from '@angular/common';
import { UsersService } from './users.service';
import { UsersApiService } from './users-api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, MatListModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((usersArr) => {
      this.usersService.setUsers(usersArr);
    });
  }

  get users() {
    return this.usersService.getUsers();
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  constructor(
    private usersService: UsersService,
    private usersApiService: UsersApiService
  ) {}
}
