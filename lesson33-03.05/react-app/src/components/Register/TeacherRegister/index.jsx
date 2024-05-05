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
import Teacher from '../../../classes/Teacher';



function TeacherRegister({setForm }) {
 
  const [teacher, setTeacher] = useState({ fullName: "", email: "", username: "", password: "", major: "", profileImage: "" });
  if (!localStorage.getItem("teachers")) {
    localStorage.setItem("teachers", JSON.stringify([]))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const teacherr = new Teacher(teacher.fullName, teacher.username, teacher.email, teacher.password, teacher.major, teacher.profileImage);


    if (!teacher.fullName || !teacher.username || !teacher.email || !teacher.password || !teacher.major || !teacher.profileImage) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Input is Required",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (teacher.password.length < 5) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Password should be at least 5 characters long!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    if (!/[A-Z]/.test(teacher.password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Must be at least 1 uppercase character!",
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    if (!/\d/.test(teacher.password)) {
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
      await post('/teachers', teacherr);
      const localTeacher = JSON.parse(localStorage.getItem("teachers"));
      localTeacher.push(teacher);
      // const existEmail = localTeacher.find((existTeacher) => existTeacher.email === teacher.email);
      // const existUsername = localTeacher.find((existTeacher) => existTeacher.username === teacher.username);
      // if (existEmail || existUsername) {
      //   Swal.fire({
      //     position: "top-end",
      //     icon: "error",
      //     title: "Email and Username already exists!",
      //     showConfirmButton: false,
      //     timer: 1500
      //   });
      //   return;
      // }
      localStorage.setItem("teachers", JSON.stringify(localTeacher));
      setTeacher(
        {
          fullName: "",
          email: "",
          username: "",
          password: "",
          major: "",
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
            Sign up Teacher
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
                  value={teacher.fullName}
                  onChange={(e) => setTeacher({ ...teacher, fullName: e.target.value })}

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
                  value={teacher.username}
                  onChange={(e) => setTeacher({ ...teacher, username: e.target.value })}

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
                  value={teacher.email}
                  onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
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
                  value={teacher.password}
                  onChange={(e) => setTeacher({ ...teacher, password: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="major"
                  label="Major"
                  name="major"
                  value={teacher.major}
                  onChange={(e) => setTeacher({ ...teacher, major: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="image"
                  label="Profil Image"
                  name="image"
                  value={teacher.profileImage}
                  onChange={(e) => setTeacher({ ...teacher, profileImage: e.target.value })}
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
              {/* <Link href="#" variant="body2" onClick={()=>{setRegisterPage('student')}}>Sign up Student</Link> */}
             
              
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

export default TeacherRegister;
