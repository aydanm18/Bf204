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
import { post } from '../../../services';
import Student from '../../../classes/Student';



function StudentRegister({ setRegisterPage, setForm }) {

  const [student, setStudent] = useState({ fullName: "", email: "", username: "", password: "", profileImage: "" });
  if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify([]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentt = new Student(student.fullName, student.username, student.email, student.password, student.profileImage);


    if (!student.fullName || !student.username || !student.email || !student.password || !student.profileImage) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Input is Required",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (student.password.length < 5) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password should be at least 5 characters long!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    if (!/[A-Z]/.test(student.password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Must be at least 1 uppercase character!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (!/\d/.test(student.password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password must be 1 digit!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }


    try {
      await post('/students', studentt);
      const localStudent = JSON.parse(localStorage.getItem("students"));
      localStudent.push(student);
      const existEmail = localStudent.find((existStudent) => existStudent.email === student.email);
      const existUsername = localStudent.find((existStudent) => existStudent.username === student.username);
      if (existEmail || existUsername) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email and Username already exists!",
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
      localStorage.setItem("students", JSON.stringify(localStudent));
      setStudent(
        {
          fullName: "",
          email: "",
          username: "",
          password: "",
          profileImage: ""
        })

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration is successful",
        showConfirmButton: false,
        timer: 1500
      });
      setForm('Login')
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const defaultTheme = createTheme();

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
            Sign up Student
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FullName"
                  required
                  fullWidth
                  id="FullName"
                  label="FullName"
                  autoFocus
                  value={student.fullName}
                  onChange={(e) => setStudent({ ...student, fullName: e.target.value })}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  name="Username"
                  autoComplete="family-name"
                  value={student.username}
                  onChange={(e) => setStudent({ ...student, username: e.target.value })}

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={student.email}
                  onChange={(e) => setStudent({ ...student, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={student.password}
                  onChange={(e) => setStudent({ ...student, password: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Profil Image"
                  name="image"
                  value={student.profileImage}
                  onChange={(e) => setStudent({ ...student, profileImage: e.target.value })}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>

              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={() => { setForm("Login") }} >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default StudentRegister;
