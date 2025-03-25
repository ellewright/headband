import { Container, Typography } from "@mui/material";
import NewEntryForm from "../components/NewEntryForm/NewEntryForm";

export default function Add() {
    return (
        <Container>
            <Typography
                sx={{
                    marginTop: "5.5rem"
                }}
            >
            </Typography>
            <NewEntryForm />
        </Container>
    );
};