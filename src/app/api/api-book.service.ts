import { Injectable } from '@angular/core';
import {
  BOOK_LIST,
  getActiveBooks,
  getHistory,
  HISTORY_LIST,
} from '../data/db.data';
import { ActiveBook, Book } from '../models/book.model';
import { HistoryItem, HistoryTypeEvent } from '../models/history.model';

@Injectable({
  providedIn: 'root',
})
export class ApiBookService {
  getBooks(): Book[] {
    return BOOK_LIST;
  }

  getHistoryByBooks(): Map<string, HistoryItem[]> {
    return getHistory('book_id');
  }

  getUserBooksHistory(id: string): HistoryItem[] {
    return HISTORY_LIST.filter((i) => i.user_id === id);
  }

  getActiveBooks(): Map<string, HistoryItem[]> {
    return getActiveBooks();
  }

   getHistoryByUsers(): Map<string, HistoryItem[]> {
    return getHistory('user_id');
  }

  getUserActiveBooks(id: string) {
    let history = this.getHistoryByUsers();
    let booksEvents = history.get(id);

    let actives: ActiveBook[] = [];
    if (booksEvents?.length) {
      let books = new Map<string, HistoryItem[]>();
      booksEvents.forEach((item: HistoryItem) => {
        let items = books.get(item.book_id);
        if (!items?.length) {
          books.set(item.book_id, [item]);
        } else {
          books.set(item.book_id, [...items, item]);
        }
      });
      if (books.size) {
        books.forEach((items, book) => {
          let isActive = true;
          let expired_date: Date | undefined = undefined;
          items.forEach((item) => {
            if (item.type === HistoryTypeEvent.returned) {
              isActive = false;
            }
            if (item.expired_date) {
              if (expired_date && +expired_date < +item.expired_date) {
                expired_date = item.expired_date;
              } else {
                expired_date = item.expired_date;
              }
            }
          });
          if (isActive) {
            actives.push({
              book_id: book,
              expired_date: expired_date ? expired_date : new Date(),
              user_id: id,
            });
          }
        });
      }
    }
    return actives;
  }

  getBooksById(ids: string[]): Book[] {
    return BOOK_LIST.filter((i) => ids.includes(i.id));
  }
}
