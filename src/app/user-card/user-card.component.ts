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
  someAttribute: any ; //property`s value comes by help of input from parent-component`s HTML-file,
                        //  where we call current component by it`s selector
  @Output() //6. это декоратор, который должен быть перед свойством, который мы будем выбрасывать 
  // 7. теперь можно использовать имя свойства (deleteMe) в HTML родительского компонента, в селекторе текущего компонента и указать функцию -
  // - (deleteMe) ="onDeleteMe()", чтобы обработать исполнение уже в родительском компоненте
  deleteMe = new EventEmitter(); // 4. в переменной deleteMe хранится объект EventEmitter(объект, который может эмитить(выбрасывать, выпускать) что-то)
  
  @Input() user?: User ;
  @Input() userMail: string | null = null;  // excludes mistakes 
  @Input() title?: string // symbol ? means that title is not necesserily will be given a value
  @Input() subtitle!: string // symbol ! means that we exactly will have a STRING-value here
  userId = this.user?.id
constructor() {  
  }
  onDeleteMe() {
    
    //1. создали кнопку с функцией при клике,
    //2. тут создали саму функцию
    //3. выносим наружу, emit event (выкинуть событие наружу) 
    // для этого создается объект с таким названием 
    this.deleteMe.emit()  //5. теперь мы можем тут им воспользоваться, вызываем у EventEmitter метод emit()
  }
  
}

