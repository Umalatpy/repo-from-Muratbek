import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersApiService } from '../../data/services/users-api.service';
import { UsersService } from '../../data/services/users.service';
import { Users } from '../../data/interfaces/users.interface';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  users: Users[] = [];

  constructor(
    private usersApiService: UsersApiService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersApiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onUserDelete(userId: number) {
    this.usersService.deleteUser(userId);
    this.users = this.usersService.users;
  }
}
