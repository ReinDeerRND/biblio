import { Component, OnInit } from '@angular/core';
import { ApiBookService } from 'src/app/api/api-book.service';
import { BookStatusWithHistory } from 'src/app/models/book.model';
import { ExchangeService } from 'src/app/shared/services/exchange.service';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['../admin.style.scss', './books-management.component.scss']
})
export class BooksManagementComponent  implements OnInit{
  activeBooks: BookStatusWithHistory[] = []
  constructor(private apiBook: ApiBookService, private exchange: ExchangeService){}

  ngOnInit(): void {
    this.activeBooks = this.exchange.getActiveBooksDescription();
  }
}
