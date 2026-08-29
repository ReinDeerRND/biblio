import { Injectable } from '@angular/core';
import { ApiBookService } from 'src/app/api/api-book.service';
import { BookStatus, BookStatusWithHistory } from 'src/app/models/book.model';
import { HistoryItem } from 'src/app/models/history.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private apiBook: ApiBookService) {}

  getActiveBooksDescriptionByUser(userId: string): BookStatus[] {
    let actives = this.apiBook.getUserActiveBooks(userId);
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

  getActiveBooksDescription(): BookStatusWithHistory[] {
    let actives: Map<string, HistoryItem[]> = this.apiBook.getActiveBooks();
    let books = this.apiBook.getBooks();
    let result: BookStatusWithHistory[] = [];
    
    actives.forEach((active, book_id) => {
      let book = books.find((i) => i.id === book_id);
      if (book) {
        result.push({book, history: active });
      } else {
        console.error('Error with book ', book_id);
      }
    });

    return result;
  }
}
