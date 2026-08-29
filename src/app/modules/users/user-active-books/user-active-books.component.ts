import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { BookStatus } from 'src/app/models/book.model';
import { ExchangeService } from 'src/app/shared/services/exchange.service';

@Component({
  selector: 'app-user-active-books',
  templateUrl: './user-active-books.component.html',
  styleUrls: ['./user-active-books.component.scss'],
})
export class UserActiveBooksComponent implements OnInit {
  @Input() userId: string | null = null;
  activeBooks: BookStatus[] = [];
  currentDate = +new Date();

  constructor(

    private exchange: ExchangeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.userId) {
      this.activeBooks = this.exchange.getActiveBooksDescriptionByUser(
        this.userId,
      );
    } else {
      this.router.navigate(['/']);
    }
  }
}
