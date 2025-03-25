import { Paper, Typography } from "@mui/material";
import { Entry } from "../../interfaces/Entry";

export default function EntryCard({ isbn, title, author, genre, publicationYear }: Entry) {
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