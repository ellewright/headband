import { Button, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Entry } from "../../interfaces/Entry";
import { deleteEntryFromDatabase } from "../../api/config";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import UpdateEntryForm from "../UpdateEntryForm/UpdateEntryForm";
import { JSX } from "@emotion/react/jsx-runtime";

export default function EntryCard({ _id, isbn, title, author, genre, publicationYear, onDelete }: Entry): JSX.Element {
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    async function handleDelete(id: string) {
        try {
            await deleteEntryFromDatabase(id);
            onDelete();
        } catch (error) {
            console.error("Failed to delete entry:", error);
        };
    };

    if (!isUpdating) {
        return (
            <Paper
                variant="outlined"
                sx={{
                    p: 2
                }}
            >
                <Typography
                    variant="h6"
                >
                    {title}
                </Typography>
                <Typography>
                    {author}
                </Typography>
                <Typography>
                    {isbn}
                </Typography>
                <Typography>
                    {genre}
                </Typography>
                <Typography
                    sx={{
                        mb: 1
                    }}
                >
                    {publicationYear}
                </Typography>
                <Button
                    onClick={() => handleDelete(_id)}
                >
                    <DeleteIcon />
                </Button>
                <Button
                    onClick={() => setIsUpdating(state => !state)}
                >
                    <Edit />
                </Button>
            </Paper>
        );
    } else {
        return (
            <UpdateEntryForm
                _id={_id}
                title={title}
                author={author}
                isbn={isbn}
                genre={genre}
                publicationYear={publicationYear}
            />
        );
    };
};