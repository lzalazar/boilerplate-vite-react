import { Copyright } from "@/components/Copyrigth";
import { createUser } from "@/redux/states/user.state";
import { authenticate } from "@/services"
import { LockOutlined } from "@mui/icons-material";
import { createTheme, Grid, Link, CssBaseline, Paper, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

const Login: React.FC = () => {

    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const dispatch = useDispatch();

    const login = async (event: any) => {
        event.preventDefault();
        try {
            let user = await authenticate();
            dispatch(createUser(user));

        } catch (error) {
            setErrorMessage("Usuario y/o contraseña incorrectos.")
        }
    }

    const theme = createTheme();
    return (<>
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ingresar al sistema
                        </Typography>
                        <Box component="form" noValidate onSubmit={login} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Olvido su contraseña?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"No tienes una cuenta? Registrate"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    </>)

}
export default Login