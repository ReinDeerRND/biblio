export interface Book {
  id: string;
  title: string;
  author: string;
  type?: BookType;
  pub_year?: number;
  taken: boolean;
  comment?: string;
}
export enum BookType {
  fantastic = 'Фантастика',
  detective = 'Детектив',
  classic = 'Классика',
  children = 'Детская литература',
  other = 'Иное',
}
export interface ActiveBook {
  book_id: string;
  user_id: string;
  expired_date: Date;
}

export interface BookStatus extends Book {
  user_id: string;
  expired_date: Date;
}
