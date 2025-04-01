import { FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import { NewEntry } from "../../interfaces/NewEntry";
import { addNewEntryToDatabase } from "../../api/config";
import { JSX } from "@emotion/react/jsx-runtime";

export default function NewEntryForm(): JSX.Element {
    const [newEntry, setNewEntry] = useState<NewEntry>({
        title: "",
        author: "",
        isbn: "",
        genre: "",
        publicationYear: "",
        review: ""
    });

    async function handleSubmit() {
        await addNewEntryToDatabase({
            ...newEntry,
            publicationYear: Number(newEntry.publicationYear)
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <FormControl sx={{ mb: 1 }}>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input
                    id="title"
                    value={newEntry?.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, title: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl sx={{ mb: 1 }}>
                <InputLabel htmlFor="author">Author</InputLabel>
                <Input
                    id="author"
                    value={newEntry?.author}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, author: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl sx={{ mb: 1 }}>
                <InputLabel htmlFor="isbn">ISBN</InputLabel>
                <Input
                    id="isbn"
                    value={newEntry?.isbn}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, isbn: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl sx={{ mb: 1 }}>
                <InputLabel htmlFor="genre">Genre</InputLabel>
                <Input
                    id="genre"
                    value={newEntry?.genre}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, genre: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl sx={{ mb: 1 }}>
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
                <InputLabel htmlFor="review">Stars</InputLabel>
                <Input
                    id="review"
                    value={newEntry?.review}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewEntry((prev) => ({ ...prev, review: e.target.value }))
                    }
                />
            </FormControl>
            <FormControl>
                <Input id="submit" type="submit" />
            </FormControl>
        </form>
    );
};