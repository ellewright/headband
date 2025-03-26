export interface NewEntry {
    _id?: string;
    isbn?: string;
    title: string;
    author?: string;
    publicationYear?: number | string;
    genre?: string;
}