import { RagistrationUserData } from '../models/auth.model';
import { HistoryItem, HistoryTypeEvent } from '../models/history.model';
import { User } from '../models/user.model';
import { HISTORY_LIST, USER_LIST, USERS_AUTH } from './db.data';
import { v4 as uuidv4 } from 'uuid';

export function getHistory(
  type: 'book_id' | 'user_id',
): Map<string, HistoryItem[]> {
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

export function checkPass(id: string, password: string): boolean {
  let user_password = USERS_AUTH.get(id);
  return user_password === password;
}

export function setUserAuth(id: string, pass: string) {
  USERS_AUTH.set(id, pass);
}

export function registerUser(user: RagistrationUserData): string {
  let id = uuidv4();
  setUserAuth(id, user.password);

  USER_LIST.push({
    id,
    family_name: user.family_name,
    name: user.name,
    middle_name: user.middle_name,
    reg_date: user.reg_date,
    email: user.email,
    birth_date: user.birth_date,
    phone: user.phone,
    address: user.address,
    active: true
  });

  return id;
}
