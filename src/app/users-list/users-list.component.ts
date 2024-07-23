import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../user';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';

import { UserCardComponent } from '../user-card/user-card.component';
import { CreateEditUserComponent } from '../create-edit-user/create-edit-user.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, NgFor, CreateEditUserComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService, private usersApiService: UsersApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.usersApiService.getUsers().subscribe((data) => {
      this.usersService.setUsers(data);
      this.users = this.usersService.getUsers();
    })
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = this.users[this.users.length - 1].id + 1;
        this.usersService.addUser(result);
        this.users = this.usersService.getUsers();
      }
    });
  }
  openEditUserDialog(user: User): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.id = user.id;
        this.usersService.editUser(result);
        this.users = this.usersService.getUsers();
      }
    });
  }

  deleteUserFromList(id: number): void {
    this.usersService.deleteUser(id);
    this.users = this.usersService.getUsers();
  }
}
