import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: false
    },
    name: {
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

const Entry = mongoose.model("Entry", entrySchema);

export default Entry;