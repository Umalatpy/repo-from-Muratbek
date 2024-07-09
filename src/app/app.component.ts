import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UsersApiService } from './service/users-api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  Users: any;
  constructor(public get: UsersApiService) {
    this.Users = get.getUsers();
  }


}
