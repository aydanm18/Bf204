import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
const defaultTheme = createTheme();



function StudentLogin({ setForm, setClassroom }) {
  const [student, setStudent] = useState({
    email: '',
    password: '',
  });

  const localStudent = JSON.parse(localStorage.getItem("students")) || [];
  const check = localStudent.find((x) => x.password === student.password && x.email === student.email);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (check) {
      localStorage.setItem("students", JSON.stringify(localStudent));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Student Signed In Successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      setClassroom('classroom')
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: 'Username or Password is incorrect!',
        showConfirmButton: false,
        timer: 1500
      });
    }

  };



  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={student.email}
              onChange={(e) => setStudent({ ...student, email: e.target.value })}
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
              value={student.password}
              onChange={(e) => setStudent({ ...student, password: e.target.value })}

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

              <Grid item>
                <Link href="#" variant="body2" onClick={() => setForm('register')}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default StudentLogin;
