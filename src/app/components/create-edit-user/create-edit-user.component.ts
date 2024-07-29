import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule, FormsModule, UntypedFormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-create-edit-user',
  standalone: true,
  imports: [NgIf, MatDialogModule, MatInputModule, ReactiveFormsModule, MatButtonModule, FormsModule, NgStyle],
  templateUrl: './create-edit-user.component.html',
  styleUrl: './create-edit-user.component.scss'
})
export class CreateEditUserComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  constructor(
    public dialogRef: MatDialogRef<CreateEditUserComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data){
      this.isEdit = false;
    } 
  }

  myForm: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(this.data?.id ?? null),
    name: new UntypedFormControl(this.data?.name ?? ''),
    username: new UntypedFormControl(this.data?.username ?? ''),
    email: new UntypedFormControl(this.data?.email ?? ''),
    phone: new UntypedFormControl(this.data?.phone ?? ''),
  });

  fromCheck: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    username: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    phone: new UntypedFormControl(''),
  })

  isEdit: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      username: this.myForm.value.username,
      email: this.myForm.value.email,
      phone: this.myForm.value.phone,
    };

    this.dialogRef.close(this.checkData());
  }
  
  checkData() {
    if(this.data.name || this.data.username || this.data.email || this.data.phone) {
      return this.data
    } else {
      return null
    }
  }

  ngOnInit(): void {

  }


}
