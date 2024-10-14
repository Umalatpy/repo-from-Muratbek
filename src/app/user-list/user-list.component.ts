import { Component, inject, Output, EventEmitter } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UsersService } from '../users.service';
import { UserCardComponent } from "../user-card/user-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, NgFor],
  providers: [UsersApiService, UsersService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  private usersApiService = inject(UsersApiService)
  public usersService = inject(UsersService)
  
  constructor() {
    this.usersApiService.getUsers().subscribe(users => { this.usersService.users = users })
    this.usersApiService.printLog()
  }

  onDeleteMe2(userId: number) {
    this.usersService.deleteUser(userId)
  }
}
