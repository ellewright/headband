import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
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
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Add</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};