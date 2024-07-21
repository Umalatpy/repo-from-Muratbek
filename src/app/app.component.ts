import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './data/interface/users.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
