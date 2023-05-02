import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '../../components/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${('/images/signup-img.png')})`, 
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square className='speed-form'>
          <Box
            sx={{
              my: 8,
              mx: 4,
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
           
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}
            className= 'speed-auth-bg'>
            <Typography component="h1" variant="h5" className='speed-auth-typo'>
              Sign in
            </Typography>
            <div class="container ">
                    <div class="row">
                        <div class="col-12 col-md-12 text-center">
                            <div className='speed-auth-resetpassword'>
                                <img src='/images/check.png' alt='successful' class='checked-success' />
                            </div>
                        </div>
                        {/* <div class="col-6 col-md-4">
                        ...
                        </div> */}
                    </div>
                </div>
            <TextField
                margin="normal"
                required
                fullWidth
                className="speed-tv-form"
                id="email"
                label="Password"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                className="speed-tv-form"
                id="email"
                label="Confirm Password"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                className="speed-tv-form"
                id="email"
                label="OTP Code"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button type="submit" className="my-button-class">
                    Click me
                  </Button>
             {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />  */}
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}