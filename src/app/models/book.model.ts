export interface Book {
    id: string;
    title: string;
    author: string;
    type?: BookType;
    pub_year?: number;
    taken: boolean;
    comment?: string;
}
export enum BookType  {
    fantastic = 'Фантастика',
    detective = 'Детектив',
    classic = 'Классика',
    children = 'Детская литература',
    other = 'Иное'
}