import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-edit-user',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    ReactiveFormsModule
  ],
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss'
})
export class CreateEditUserComponent {
  userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateEditUserComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.userForm = this.formBuilder.group({
      id: [data ? data.id : uuidv4()],
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', Validators.required],
      email: ['', Validators.email],
      phone: [''],
    })

    if (data) {
      this.userForm.patchValue(data);
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

}
