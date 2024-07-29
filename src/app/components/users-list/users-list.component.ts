import { UsersService } from './../../data/service/users.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { User } from '../../data/interface/users.interface';
import { JsonPipe, NgFor } from '@angular/common';
import { UsersApiService } from '../../data/service/users-api.service';
import { UserCardComponent } from "../user-card/user-card.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, UserCardComponent, NgFor,   JsonPipe,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule, ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  constructor(
    public usersService: UsersService,
    private usersApiService: UsersApiService
  ) {}

  ngOnInit() {
    this.usersApiService.getUsers().subscribe(users => {
      this.usersService.setUsers(users);
    });
  }
}
