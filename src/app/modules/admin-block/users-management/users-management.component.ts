import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/api/api-user.service';
import { ModalType } from 'src/app/models/modal-view.model';
import { User } from 'src/app/models/user.model';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
  users: User[] = [];
  constructor(
    private apiUsers: ApiUserService,
    private modal: ModalService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.apiUsers.getUsers();
  }

  toggleStatus(user: User) {
    console.log(user);
    let result = this.apiUsers.changeUserStatus(user.id, !user.active);
    if (result) {
      this.getUsers();
    } else {
      console.error('Could not change user status');
    }
  }

  getBookInfo(user: User) {
    this.modal.openModalComponent(
      `Просмотр книг читателя ${user.family_name} ${user.name}`,
      ModalType.UserBooks,
      user.id,
    );
  }
}
