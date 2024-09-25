import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { UserCardComponent } from './user-card/user-card.component';
import { NgFor } from '@angular/common';
import { UsersService } from './users.service';
import { User } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../create-edit-user/create-edit-user.component';

export type DialogData = User | null;

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor, MatListModule, UserCardComponent, CreateEditUserComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  dialog = inject(MatDialog);
  isDialogClosed = false;

  redactUser(dataObj: DialogData) {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: dataObj,
    });
    this.isDialogClosed = true;

    dialogRef.afterClosed().subscribe((result: User) => {
      this.isDialogClosed = false;
      if (result) this.usersService.updateUser(result);
    });
  }

  createUser() {
    const dialogRef = this.dialog.open(CreateEditUserComponent, {
      data: null,
    });
    this.isDialogClosed = true;

    dialogRef.afterClosed().subscribe((result: User) => {
      this.isDialogClosed = false;
      if (result) this.usersService.addUser(result);
    });
  }

  ngOnInit(): void {
    this.usersService.usersChange.subscribe(
      (usersArr) => (this.users = usersArr)
    );
    this.usersService.getUsers();
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  constructor(private usersService: UsersService) {}
}
