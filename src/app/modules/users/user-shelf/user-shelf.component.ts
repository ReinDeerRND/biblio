import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-shelf',
  templateUrl: './user-shelf.component.html',
  styleUrls: ['./user-shelf.component.scss']
})
export class UserShelfComponent {
@Input() userId: string | null = null;
}
