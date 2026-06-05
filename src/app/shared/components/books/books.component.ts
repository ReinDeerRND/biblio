import { Component, Input, OnInit } from '@angular/core';
import { ApiBookService } from 'src/app/api/api-book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

@Input() title = 'Библиотечный каталог';
catalog: Book[] = [];

constructor(private books: ApiBookService){

}
ngOnInit(): void {
  this.catalog = this.books.getBooks();
}
}
