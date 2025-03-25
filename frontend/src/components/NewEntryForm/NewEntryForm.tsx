import { FormControl, Input, InputLabel } from "@mui/material";

export default function NewEntryForm() {

    async function handleSubmit() {

    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <FormControl>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input id="title" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="author">Author</InputLabel>
                <Input id="author" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="isbn">ISBN</InputLabel>
                <Input id="isbn" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="genre">Genre</InputLabel>
                <Input id="genre" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="publicationYear">Year published</InputLabel>
                <Input id="publicationYear" />
            </FormControl>
            <FormControl>
                <Input id="submit" type="submit" />
            </FormControl>
        </form>
    );
};