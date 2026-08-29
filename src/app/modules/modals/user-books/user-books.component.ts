import { Component, Input, OnInit } from '@angular/core';
import { ApiBookService } from 'src/app/api/api-book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss'],
})
export class UserBooksComponent implements OnInit {
  @Input() data: string = '';
  books: Book[] = [];

  constructor(private apiBook: ApiBookService) {}

  ngOnInit(): void {
    console.log(this.data);
    this.getBooks();
  }

  getBooks() {

    // let activeBooks = this.apiBook.getActiveUserBooks(this.data);
    console.log('====================================');

  }
}
