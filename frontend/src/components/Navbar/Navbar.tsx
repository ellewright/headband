import { JSX } from "@emotion/react/jsx-runtime";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar(): JSX.Element {
    const navigate = useNavigate();

    return (
        <AppBar>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1
                    }}
                >
                    Headband
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Button
                        color="inherit"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate("/add")}
                    >
                        Add
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};