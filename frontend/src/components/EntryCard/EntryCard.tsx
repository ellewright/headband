import { Paper, Typography } from "@mui/material";

interface EntryCardProps {
    isbn: string | undefined;
    title: string;
    author: string | undefined;
    genre: string | undefined;
    publicationYear: number | undefined;
}

export default function EntryCard({ isbn, title, author, genre, publicationYear }: EntryCardProps) {
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
        </Paper>
    );
};