import { Injectable } from '@angular/core';
import { UsersApiService } from './users-api.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';





type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
  @Injectable({
    providedIn: 'root'
  })
export class UsersService implements OnInit{
  users: User[] = []
  // users: any;
  constructor(public get: UsersApiService) {}

  ngOnInit(): void {
    this.get
          .getUsers()
          .subscribe(
              (data: any) => (this.users.push(data))
          );
  }



}
