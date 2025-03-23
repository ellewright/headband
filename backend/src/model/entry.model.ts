import mongoose, {Schema, Document} from "mongoose";

export interface Enterable extends Document {
    isbn?: string;
    title: string;
    author?: string;
    publicationYear?: number;
    genre?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const entrySchema = new mongoose.Schema<Enterable>({
    isbn: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    publicationYear: {
        type: Number,
        required: false
    },
    genre: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Entry = mongoose.model<Enterable>("Entry", entrySchema);

export default Entry;