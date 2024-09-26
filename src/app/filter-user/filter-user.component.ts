import { Component, OnInit } from '@angular/core';
import { FilterUserInputComponent } from './filter-user-input/filter-user-input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersApiService } from '../users-list/users-api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  debounceTime,
  filter,
  map,
  Observable,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { User } from '../models/user.model';

@Component({
  selector: 'app-filter-user',
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FilterUserInputComponent,
  ],
  templateUrl: './filter-user.component.html',
  styleUrl: './filter-user.component.scss',
})
export class FilterUserComponent implements OnInit {
  filterForm = new FormGroup({
    filterStr: new FormControl(''),
  });

  filteredUsers!: Observable<User[]>;

  ngOnInit(): void {
    this.filteredUsers = this.filterForm.controls.filterStr!.valueChanges.pipe(
      debounceTime(300),
      switchMap((str) => {
        if (str) return this.usersApiService.fetchUsers(str);
        return this.usersApiService.fetchUsers();
      })
    );
    this.filteredUsers.subscribe((l) => console.log(l));
  }

  constructor(private usersApiService: UsersApiService) {}
}
