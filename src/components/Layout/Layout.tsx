import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Copyright } from "../Copyrigth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SideNav } from "./Sidenav";
import { NavBar } from "./Navbar";


const mdTheme = createTheme();

const Layout = () => {
    return (<>
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <NavBar />
                <SideNav />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Outlet />
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>

        </ThemeProvider>
    </>)
}

export default Layout;
