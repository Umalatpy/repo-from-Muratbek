import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user!: User;

  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<User>();


  deleteUserCard(id: number): void {
    this.onDelete.emit(id);
  }

  editUserCard(user: User): void {
    this.onEdit.emit(user);
  }
}
