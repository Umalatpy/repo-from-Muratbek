import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UsersApiService } from './service/users-api.service';
import { subscribeOn } from 'rxjs';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{
  a: any
  constructor(UsersService: UsersService) {
    
    this.a = UsersService.users
  }



  

  


}

