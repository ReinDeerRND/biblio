import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/api/api-user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

users: User[] = [];
constructor(private apiUsers: ApiUserService){}

ngOnInit(): void {
  this.users = this.apiUsers.getUsers();
}
}
