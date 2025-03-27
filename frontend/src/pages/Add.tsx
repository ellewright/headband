import { Container, Typography } from "@mui/material";
import NewEntryForm from "../components/NewEntryForm/NewEntryForm";
import { JSX } from "@emotion/react/jsx-runtime";

export default function Add(): JSX.Element {
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