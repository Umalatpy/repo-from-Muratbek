import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiService } from '../data/services/users-api.service';
import { UsersService } from '../data/services/users.service';
import { Users } from '../data/interface/users.interface';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Users[] = [];

  constructor(
    private usersApiService: UsersApiService, 
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersApiService.getUsers().subscribe({
      next: (val) => {
        this.users = val;
      },
      error: (err) => {
        console.error('Ошибка при получении данных пользователей', err);
      }
    });
  }
  onUserDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
