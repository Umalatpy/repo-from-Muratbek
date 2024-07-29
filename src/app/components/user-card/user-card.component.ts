import { UsersApiService } from './../../data/service/users-api.service';
import { JsonPipe } from '@angular/common';
import { UsersService } from '../../data/service/users.service';
import { User } from './../../data/interface/users.interface';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateEditUserComponent } from '../create-edit-user/create-edit-user.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    JsonPipe,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;
  users!: User[];
  usersSubcription!: Subscription;

  constructor(
    public ApiService: UsersApiService,
    public UsersService: UsersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.usersSubcription = this.ApiService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    });

  }

  deleteItem(id: number) {
    this.UsersService.deleteProduct(id).subscribe(() => {
      const index = this. users.findIndex(user => user.id === id)
      this.users.splice(index, 1) 
    });
  }

  openDialog(user?: User): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.data = user;
    const dialogRef = this.dialog.open(CreateEditUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data &&  data.id){ 
          this.updateData(data)
        }else {
          console.log('post')
          this.postData(data)} ;
      }
    });
  }

  postData(data: User) {
    this.ApiService.postUser(data).subscribe((data) => this.users.push(data));
  }
  updateData(user: User) {
    this.UsersService.updateUser(user).subscribe((data) => {
      this.users = this.users.map((user) => {
        if (user.id === data.id) return data;
        else return user;
      });
    });
  }
  ngOnDestroy() {
    if (this.usersSubcription) this.usersSubcription.unsubscribe();
  }
}
