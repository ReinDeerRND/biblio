import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export enum UserPageType  {
  Active,
  BookShelf
}
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  userId: string | null = null;
  types = UserPageType;
  type = UserPageType.Active

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (
      this.userId && true
      //this.auth.checkAuth(this.userId, localStorage.getItem(this.userId) || '')
    ) {
     
    } else {
      this.router.navigate(['/']);
    }
  }

  changePage(event: Event, type: UserPageType){
    event.preventDefault();
    this.type = type;
  }
 
}
