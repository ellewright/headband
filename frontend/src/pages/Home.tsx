import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Entry } from "../interfaces/Entry";
import { fetchAllEntriesfromDatabase } from "../api/config";
import EntryCard from "../components/EntryCard/EntryCard";
import { JSX } from "@emotion/react/jsx-runtime";

export default function Home(): JSX.Element {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const response = await fetchAllEntriesfromDatabase();
            setEntries(response.data);
        };

        fetchEntries();
    }, [entries]);

    return (
        <Container>
            <Typography
                sx={{
                    marginTop: "5.5rem"
                }}
            >
            </Typography>
            {entries.map((entry) => (
                <EntryCard
                    _id={entry._id}
                    key={entry._id}
                    isbn={entry.isbn}
                    title={entry.title}
                    author={entry.author}
                    genre={entry.genre}
                    publicationYear={entry.publicationYear}
                />
            ))}
        </Container>
    );
};