import { Component } from '@angular/core';
import { USER_LIST } from 'src/app/db.data';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  users = USER_LIST;
}
