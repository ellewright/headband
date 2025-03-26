import { Button, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Entry } from "../../interfaces/Entry";
import { deleteEntryFromDatabase } from "../../api/config";

export default function EntryCard({ _id, isbn, title, author, genre, publicationYear }: Entry) {

    async function handleDelete(id: string) {
        await deleteEntryFromDatabase(id);
    };

    return (
        <Paper
            variant="outlined"
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
            <Typography>
                {publicationYear}
            </Typography>
            <Button
                onClick={() => handleDelete(_id)}
            >
                <DeleteIcon />
            </Button>
        </Paper>
    );
};