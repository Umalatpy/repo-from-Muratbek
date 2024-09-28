import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
