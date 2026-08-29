import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBookService } from 'src/app/api/api-book.service';
import { ApiUserService } from 'src/app/api/api-user.service';
import { ActiveBook, BookStatus } from 'src/app/models/book.model';
import { ExchangeService } from 'src/app/shared/services/exchange.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  userId: string | null = null;
  activeBooks: BookStatus[] = [];
  currentDate = +new Date();

  constructor(
    private route: ActivatedRoute,
    private auth: ApiUserService,
    // private books: ApiBookService,
    private exchange: ExchangeService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');

    console.log(this.userId);

    if (
      this.userId && true
      //this.auth.checkAuth(this.userId, localStorage.getItem(this.userId) || '')
    ) {
      this.activeBooks = this.exchange.getActiveBooksDescriptionByUser(this.userId);
      console.log('====================================');
      console.log(this.activeBooks);
      console.log('====================================');
    } else {
      this.router.navigate(['/']);
    }
  }

  loadUserData(id: string | null) {
    console.log('Загружаем данные пользователя с id:', id);
    // Ваш код для загрузки данных
  }
}
