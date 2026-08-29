import { ActiveBook, Book } from '../models/book.model';
import { HistoryItem, HistoryTypeEvent } from '../models/history.model';
import { User } from '../models/user.model';

export const USER_LIST: User[] = [
  {
    id: 'usr_001',
    family_name: 'Толстой',
    name: 'Лев',
    middle_name: 'Николаевич',
    reg_date: new Date(2024, 0, 15), // 15 января 2024
    birth_date: new Date(1985, 0, 21),
    email: 'l.tolstoy@ya.ru',
    active: true,
  },
  {
    id: 'usr_002',
    family_name: 'Достоевский',
    name: 'Фёдор',
    middle_name: 'Михайлович',
    reg_date: new Date(2024, 0, 20),
    birth_date: new Date(1983, 4, 25),
    active: true,
  },
  {
    id: 'usr_003',
    family_name: 'Чехова',
    name: 'Анна',
    middle_name: 'Павловна',
    reg_date: new Date(2024, 1, 5),
    active: true,
  },
  {
    id: 'usr_004',
    family_name: 'Булгаков',
    name: 'Михаил',
    middle_name: 'Афанасьевич',
    reg_date: new Date(2024, 1, 10),
    email: 'bul54@bk.ru',
    active: true,
  },
  {
    id: 'usr_005',
    family_name: 'Цветаева',
    name: 'Марина',
    reg_date: new Date(2024, 1, 18),
    active: true,
  },
  {
    id: 'usr_006',
    family_name: 'Есенин',
    name: 'Сергей',
    middle_name: 'Александрович',
    reg_date: new Date(2024, 2, 1),
  },
  {
    id: 'usr_007',
    family_name: 'Ахматова',
    name: 'Анна',
    middle_name: 'Андреевна',
    reg_date: new Date(2024, 2, 12),
  },
  {
    id: 'usr_008',
    family_name: 'Набоков',
    name: 'Владимир',
    middle_name: 'Владимирович',
    reg_date: new Date(2024, 2, 25),
  },
  {
    id: 'usr_009',
    family_name: 'Гоголь',
    name: 'Николай',
    middle_name: 'Васильевич',
    reg_date: new Date(2024, 3, 3),
  },
  {
    id: 'usr_010',
    family_name: 'Тургенева',
    name: 'Ирина',
    middle_name: 'Сергеевна',
    reg_date: new Date(2024, 3, 14),
    active: true,
  },
  {
    id: 'usr_011',
    family_name: 'Шолохов',
    name: 'Михаил',
    reg_date: new Date(2024, 3, 22),
  },
  {
    id: 'usr_012',
    family_name: 'Грибоедова',
    name: 'Софья',
    middle_name: 'Александровна',
    reg_date: new Date(2024, 4, 1),
  },
  {
    id: 'usr_013',
    family_name: 'Лермонтов',
    name: 'Михаил',
    middle_name: 'Юрьевич',
    reg_date: new Date(2024, 4, 9),
  },
  {
    id: 'usr_014',
    family_name: 'Пушкина',
    name: 'Наталья',
    middle_name: 'Николаевна',
    reg_date: new Date(2024, 4, 17),
  },
  {
    id: 'usr_015',
    family_name: 'Островский',
    name: 'Александр',
    middle_name: 'Николаевич',
    reg_date: new Date(2024, 4, 28),
  },
];

export const BOOK_LIST: Book[] = [
  {
    id: 'bk_001',
    title: '451 градус по Фаренгейту',
    author: 'Рэй Брэдбери',
    pub_year: 1953,
    taken: false,
    comment: 'Научно-фантастический роман',
  },
  {
    id: 'bk_002',
    title: 'Гарри Поттер и философский камень',
    author: 'Дж.К. Роулинг',
    pub_year: 1997,
    taken: true,
    comment: 'Детская литература',
  },
  {
    id: 'bk_003',
    title: '1984',
    author: 'Джордж Оруэлл',
    pub_year: 1949,
    taken: false,
    comment: 'Антиутопия',
  },
  {
    id: 'bk_004',
    title: 'Убить пересмешника',
    author: 'Харпер Ли',
    pub_year: 1960,
    taken: true,
    comment: 'Пулитцеровская премия',
  },
  {
    id: 'bk_005',
    title: 'Великий Гэтсби',
    author: 'Фрэнсис Скотт Фицджеральд',
    pub_year: 1925,
    taken: false,
    comment: 'Американская классика',
  },
  {
    id: 'bk_006',
    title: 'Над пропастью во ржи',
    author: 'Джером Сэлинджер',
    pub_year: 1951,
    taken: true,
    comment: '',
  },
  {
    id: 'bk_007',
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    pub_year: 1943,
    taken: false,
    comment: 'С иллюстрациями автора',
  },
  {
    id: 'bk_008',
    title: 'Граф Монте-Кристо',
    author: 'Александр Дюма',
    pub_year: 1844,
    taken: false,
    comment: 'В 2 томах',
  },
  {
    id: 'bk_009',
    title: 'Три товарища',
    author: 'Эрих Мария Ремарк',
    pub_year: 1936,
    taken: true,
    comment: 'Продление бронирования',
  },
  {
    id: 'bk_010',
    title: 'Сто лет одиночества',
    author: 'Габриэль Гарсиа Маркес',
    pub_year: 1967,
    taken: false,
    comment: 'Магический реализм',
  },
];

export const HISTORY_LIST: HistoryItem[] = [
  {
    user_id: 'usr_001',
    book_id: 'bk_002',
    type: HistoryTypeEvent.taken,
    date: new Date(2026, 1, 15),
    expired_date: new Date(2027, 10, 15),
  },
  {
    user_id: 'usr_001',
    book_id: 'bk_002',
    type: HistoryTypeEvent.returned,
    date: new Date(2026, 2, 10),
  },
  {
    user_id: 'usr_002',
    book_id: 'bk_003',
    type: HistoryTypeEvent.taken,
    date: new Date(2026, 1, 15),
    expired_date: new Date(2026, 10, 15),
  },
  {
    user_id: 'usr_002',
    book_id: 'bk_003',
    type: HistoryTypeEvent.prolongated,
    date: new Date(2026, 2, 15),
    expired_date: new Date(2027, 3, 15),
  },
  {
    user_id: 'usr_002',
    book_id: 'bk_003',
    type: HistoryTypeEvent.returned,
    date: new Date(2026, 2, 15),
    expired_date: new Date(2026, 3, 3),
  },
  {
    user_id: 'usr_001',
    book_id: 'bk_004',
    type: HistoryTypeEvent.taken,
    date: new Date(2026, 5, 7),
    expired_date: new Date(2026, 6, 7),
  },
  {
    user_id: 'usr_002',
    book_id: 'bk_005',
    type: HistoryTypeEvent.taken,
    date: new Date(2026, 5, 7),
    expired_date: new Date(2027, 6, 7),
  },
];

export const ACTIVE_AUTH = new Map<string, string>();

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
