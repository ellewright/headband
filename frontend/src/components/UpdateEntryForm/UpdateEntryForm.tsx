import { FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import { NewEntry } from "../../interfaces/NewEntry";
import { updateEntryInDatabase } from "../../api/config";
import "./UpdateEntryForm.css";

export default function UpdateEntryForm({ _id, title, author, isbn, genre, publicationYear }: NewEntry) {
    const [newEntry, setNewEntry] = useState<NewEntry>({
        title: title,
        author: author,
        isbn: isbn,
        genre: genre,
        publicationYear: publicationYear
    });

    async function handleSubmit(id: string | undefined, updatedEntry: NewEntry) {
        if (!id) {
            throw new Error("ID must be defined in update endpoint.");
        }

        await updateEntryInDatabase(id, updatedEntry);
    };

    return (
        <form
            onSubmit={() => handleSubmit(_id, newEntry)}
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <FormControl
                className="input-field"
            >
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input
                    id="title"
                    value={newEntry?.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, title: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl
                className="input-field"
            >
                <InputLabel htmlFor="author">Author</InputLabel>
                <Input
                    id="author"
                    value={newEntry?.author}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, author: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl
                className="input-field"
            >
                <InputLabel htmlFor="isbn">ISBN</InputLabel>
                <Input
                    id="isbn"
                    value={newEntry?.isbn}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, isbn: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl
                className="input-field"
            >
                <InputLabel htmlFor="genre">Genre</InputLabel>
                <Input
                    id="genre"
                    value={newEntry?.genre}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, genre: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl
                className="input-field"
            >
                <InputLabel htmlFor="publicationYear">Year published</InputLabel>
                <Input
                    id="publicationYear"
                    value={newEntry?.publicationYear}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, publicationYear: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl>
                <Input id="submit" type="submit" />
            </FormControl>
        </form>
    );
};