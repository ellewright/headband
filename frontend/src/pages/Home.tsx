import { Button, Container, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Entry } from "../interfaces/Entry";
import { fetchAllEntriesfromDatabase } from "../api/config";
import EntryCard from "../components/EntryCard/EntryCard";
import { JSX } from "@emotion/react/jsx-runtime";

export default function Home(): JSX.Element {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const [sorted, setSorted] = useState<boolean>(false);
    const [sortOrder, setSortOrder] = useState<boolean>(true);

    const fetchEntries = useCallback(async () => {
        if (!sorted) {
            try {
                const response = await fetchAllEntriesfromDatabase();
                setEntries(response.data);
            } catch (error) {
                console.error("Error fetching entries:", error);
            };
        } else {
            if (sortOrder) {
                try {
                    const response = await fetchAllEntriesfromDatabase(true);
                    setEntries(response.data);
                } catch (error) {
                    console.error("Error fetching entries:", error);
                };
            } else {
                try {
                    const response = await fetchAllEntriesfromDatabase(false, true);
                    setEntries(response.data);
                } catch (error) {
                    console.error("Error fetching entries:", error);
                };
            }
        }

    }, [sortOrder]);

    useEffect(() => {
        fetchEntries();
    }, [fetchEntries, refresh]);

    function handleSort() {
        if (!sorted) {
            setSorted(true);
        }

        setSortOrder(prev => !prev);
    };

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
            <Button
                onClick={handleSort}
            >
                Sort By Review
            </Button>
            {entries.map((entry) => (
                <EntryCard
                    _id={entry._id}
                    key={entry._id}
                    isbn={entry.isbn}
                    title={entry.title}
                    author={entry.author}
                    genre={entry.genre}
                    review={entry.review}
                    publicationYear={entry.publicationYear}
                    onDelete={handleDelete}
                />
            ))}
        </Container>
    );
};