import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { User } from '../models/user.model';
import { DialogData } from '../users-list/users-list.component';

@Component({
  selector: 'app-create-edit-user',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogContent,
  ],
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss',
})
export class CreateEditUserComponent implements OnInit {
  isRedactMode = false;

  data = inject<DialogData>(MAT_DIALOG_DATA);

  userInfoForm: FormGroup = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.min(2)],
    }),
    username: new FormControl('', {
      validators: [Validators.required, Validators.min(2)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    website: new FormControl('', { validators: Validators.required }),
  });

  ngOnInit() {
    if (this.data) {
      this.isRedactMode = true;

      this.userInfoForm.patchValue({
        name: this.data.name,
        username: this.data.username,
        email: this.data.email,
        website: this.data.website,
      });
    }
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  saveUser() {
    if (!this.userInfoForm.valid) return;

    const id = this.data ? this.data?.id : 100 + Math.random() * (100 - 10);

    const name = this.userInfoForm.get('name')?.value;
    const username = this.userInfoForm.get('username')?.value;
    const email = this.userInfoForm.get('email')?.value;
    const website = this.userInfoForm.get('website')?.value;

    if (name && username && email && website)
      this.dialogRef.close(new User(id, name, username, email, website));
  }

  constructor(public dialogRef: MatDialogRef<CreateEditUserComponent>) {}
}
