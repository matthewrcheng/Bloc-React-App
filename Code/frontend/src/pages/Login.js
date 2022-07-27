import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { GlobalState } from '../context/GlobalState';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [token, setToken] = useContext(GlobalState);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const validate = async () => {
        await axios.get(`http://localhost:3001/api/data/users/${email}/${pass}`)
        .then(res => {
            localStorage.setItem('loggedin', !res.data.notFound);
            localStorage.setItem('user_id', res.data.userId);
            //console.log("Login axios res", res.data.userId);
            setToken(!res.data.notFound);
        });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await validate();
        navigate('/');
    }

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Bloc
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      
      const theme = createTheme();
    
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPass(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}
