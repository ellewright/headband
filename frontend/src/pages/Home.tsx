import { Container, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Entry } from "../interfaces/Entry";
import { fetchAllEntriesfromDatabase } from "../api/config";
import EntryCard from "../components/EntryCard/EntryCard";
import { JSX } from "@emotion/react/jsx-runtime";

export default function Home(): JSX.Element {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);

    const fetchEntries = useCallback(async () => {
        try {
            const response = await fetchAllEntriesfromDatabase();
            setEntries(response.data);
        } catch (error) {
            console.error("Error fetching entries:", error);
        };
    }, []);

    useEffect(() => {
        fetchEntries();
    }, [fetchEntries, refresh]);

    function handleDelete() {
        setRefresh(prev => !prev);
    };

    return (
        <Container>
            <Typography
                variant="h4"
                sx={{
                    marginTop: "5.5rem"
                }}
            >
                Entries
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
                    onDelete={handleDelete}
                />
            ))}
        </Container>
    );
};