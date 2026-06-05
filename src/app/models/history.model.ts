export interface HistoryItem {
    user_id: string;
    book_id: string;
    type: HistoryTypeEvent;
    date: Date;
    expired_date? : Date;
}
export enum HistoryTypeEvent {
    taken = 'taken',
    returned = 'returned',
    prolongated = 'prolongated'
}