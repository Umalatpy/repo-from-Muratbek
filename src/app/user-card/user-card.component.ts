import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  User } from '../users-api.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [ ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {


  @Input()
  someAttribute: any ; 

  @Output() 
  deleteMe = new EventEmitter<number>(); 

  @Input() user?: User ;
  @Input() userMail: string | null = null;  
  @Input() title?: string 
  @Input() subtitle!: string 
constructor() {  
  }
  onDeleteMe() {
    this.deleteMe.emit(this.user?.id)  
  }
  
}

