import { Button, Container, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Entry } from "../../interfaces/Entry";
import { deleteEntryFromDatabase } from "../../api/config";
import { useEffect, useState } from "react";
import { Edit } from "@mui/icons-material";
import UpdateEntryForm from "../UpdateEntryForm/UpdateEntryForm";
import { JSX } from "@emotion/react/jsx-runtime";

export default function EntryCard({ _id, isbn, title, author, genre, publicationYear, review, onDelete }: Entry): JSX.Element {
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isImageFound, setIsImageFound] = useState<boolean>(true);

    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;

    useEffect(() => {
        const img = new Image();
        img.src = coverUrl;

        img.onload = () => {
            if (img.naturalWidth === 1) { // image not found
                setIsImageFound(false);
            }
        };

        img.onerror = () => { // failed to load image
            setIsImageFound(false);
        };
    }, [coverUrl]);

    async function handleDelete(id: string) {
        try {
            await deleteEntryFromDatabase(id);
            onDelete();
        } catch (error) {
            console.error("Failed to delete entry:", error);
        };
    };

    function handleError() {
        console.log("Error")
        setIsImageFound(false);
    };

    if (!isUpdating) {
        return (
            <Paper
                variant="outlined"
                sx={{
                    p: 2
                }}
            >
                {isImageFound && (
                    <Container>
                        <img
                            src={coverUrl}
                            alt="Cover."
                            onError={handleError}
                        />
                    </Container>
                )}
                <Typography
                    variant="h6"
                >
                    {title}
                </Typography>
                <Typography>
                    By: {author}
                </Typography>
                <Typography>
                    ISBN: {isbn}
                </Typography>
                <Typography>
                    Genre: {genre}
                </Typography>
                <Typography>
                    Year of publication: {publicationYear}
                </Typography>
                <Typography
                    sx={{
                        mb: 1
                    }}
                >
                    {review}/5 stars
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
                review={review}
            />
        );
    };
};