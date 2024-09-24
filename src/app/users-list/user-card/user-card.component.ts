import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onUpdate = new EventEmitter<User>();

  onDeleteUser() {
    this.onDelete.emit(this.user.id);
  }

  onUpdateUser() {
    this.onUpdate.emit(this.user);
  }
}
