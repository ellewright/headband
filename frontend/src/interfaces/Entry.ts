export interface Entry {
    _id: string;
    isbn?: string;
    title: string;
    author?: string;
    publicationYear?: number;
    genre?: string;
    createdAt?: Date;
    updatedAt?: Date;
    onDelete: () => void;
}