import { Component } from '@angular/core';
import { BOOK_LIST } from 'src/app/data/db.data';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
books: Book[] = BOOK_LIST;
}
