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

    const localStorageArray = JSON.parse(localStorage.getItem('users')!);

    if (localStorage.length > 0 && localStorageArray.length > 0) {
      this.usersService.setUsers(localStorageArray);
      this.users = this.usersService.getUsers();
    } else {
      this.usersApiService.getUsersApi().subscribe((data) => {
        localStorage.setItem('users', JSON.stringify(data));
        this.usersService.setUsers(JSON.parse(localStorage.getItem('users')!));
        this.users = this.usersService.getUsers();
      })
    }
    // this.users = this.usersService.getUsers();
  }

  openCreateEditDialog(user: User | null = null): void {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        user ? this.usersService.editUser(result) : this.usersService.addUser(result);
        localStorage.setItem('users', JSON.stringify(this.usersService.getUsers()));
        this.users = this.usersService.getUsers();
      }
    });
  }

  deleteUserFromList(id: number): void {
    this.usersService.deleteUser(id);
    localStorage.setItem('users', JSON.stringify(this.usersService.getUsers()));
    this.users = this.usersService.getUsers();
  }

  clearLocalStorage(): void {
    localStorage.clear();
    this.ngOnInit();
  }
}
