import { Injectable } from '@angular/core';
import { ACTIVE_BOOKS, BOOK_LIST, HISTORY_LIST } from '../data/db.data';
import { User } from '../models/user.model';

import { v4 as uuidv4 } from 'uuid';
import { ActiveBook, Book } from '../models/book.model';
import { HistoryItem } from '../models/history.model';

@Injectable({
  providedIn: 'root',
})
export class ApiBookService {
  getBooks(): Book[] {
    return BOOK_LIST;
  }

  getUserBooksHistory(id: string): HistoryItem[] {
    return HISTORY_LIST.filter((i) => i.user_id === id);
  }

  getActiveUserBooks(id: string): ActiveBook[] {
    return ACTIVE_BOOKS.filter((i) => i.user_id === id);
  }
}
