import { HistoryItem, HistoryTypeEvent } from "../models/history.model";
import { HISTORY_LIST } from "./db.data";

export function getHistory(type: 'book_id'|'user_id'): Map<string, HistoryItem[]> {
  let history = new Map<string, HistoryItem[]>();
  HISTORY_LIST.forEach((item) => {
    let items = history.get(item[type]);
    if (!items?.length) {
      history.set(item[type], [item]);
    } else {
      history.set(item[type], [...items, item]);
    }
  });
  return history;
}

export function getActiveBooks() {
  let history = getHistory('book_id');
  let activeBooks = new Map<string, HistoryItem[]>();
  history.forEach((items, book) => {
    let isActive = true;
    items.forEach((item) => {
      if (item.type === HistoryTypeEvent.returned) {
        isActive = false;
      }
    });
    if (isActive) {
      activeBooks.set(book, items);
    }
  });
  return activeBooks;
}
