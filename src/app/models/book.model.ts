export interface Book {
    id: string;
    title: string;
    author: string;
    pub_year?: number;
    taken: boolean;
    comment?: string;
}