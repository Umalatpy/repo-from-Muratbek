import { Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  providers: [UsersApiService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  private userApiService = inject(UsersApiService)
  constructor() {
    this.userApiService.printLog()
  }
}
