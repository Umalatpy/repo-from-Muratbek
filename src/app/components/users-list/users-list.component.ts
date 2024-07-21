import { UsersService } from './../../data/service/users.service';
import { RouterOutlet } from '@angular/router';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { User } from '../../data/interface/users.interface';
import { JsonPipe } from '@angular/common';
import { UsersApiService } from '../../data/service/users-api.service';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Output() deleteUser = new EventEmitter<string>()
  usersService = inject(UsersService)
  usersApi = inject(UsersApiService)
  
  onDeleteUser(id: number) {
    this.usersService.deleteUser(id);
    this.usersService.users = this.usersApi.getUsers();
  }
 
}
