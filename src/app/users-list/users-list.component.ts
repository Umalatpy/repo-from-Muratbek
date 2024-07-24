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
  imports: [UserCardComponent, CreateEditUserComponent, NgFor],
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
      console.log(this.users);
    })
  }

  openCreateEditDialog(user: User | null = null): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user ? this.usersService.editUser(result) : this.usersService.addUser(result);
        this.users = this.usersService.getUsers();
        console.log(this.users);
      }
    });
  }

  deleteUserFromList(id: number): void {
    this.usersService.deleteUser(id);
    this.users = this.usersService.getUsers();
  }
}
