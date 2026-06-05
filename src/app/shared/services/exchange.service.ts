import { Injectable } from '@angular/core';
import { ApiBookService } from 'src/app/api/api-book.service';
import { AuthPassItem } from 'src/app/models/auth.model';
import { ActiveBook, BookStatus } from 'src/app/models/book.model';
import { HistoryItem } from 'src/app/models/history.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private apiBook: ApiBookService) {}

  getActiveBooksDescription(userId: string): BookStatus[] {
    let actives = this.apiBook.getActiveUserBooks(userId)
    let books = this.apiBook.getBooks();
    let result: BookStatus[] = [];
    actives.forEach((active) => {
      let book = books.find((i) => i.id === active.book_id);
      if (book) {
        result.push({ ...book, ...active });
      } else {
        console.error('Error with book ', active.book_id);
      }
    });

    return result;
  }
}
