import { JsonPipe } from '@angular/common';
import { UsersService } from '../../data/service/users.service';
import { User } from './../../data/interface/users.interface';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() users!: User

  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.users.id);
  }

  constructor() {}


}
