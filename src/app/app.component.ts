import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, UserCardComponent, UserListComponent ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor() {
    }
}
