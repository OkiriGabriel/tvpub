import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Btn from '../../components/Button';
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

              <TextField
                margin="normal"
                required
                fullWidth
                className="speed-tv-form"
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
                className="speed-tv-form"
                type="password"
                id="password"
                autoComplete="current-password"
              />
             
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" className='primary-color fgt-pwd'>
                    Reset Your Password
                  </Link>
                </Grid>
              </Grid>
              <Btn type="submit" className="my-button-class">
                    Sign In
                  </Btn>
                <div className='container'>
                  <div className="col-lg-10">
                    <div className="d-flex frm-ctl">
                    <h2>Remember me?</h2>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" className='checked' />}
                    />
                      </div> 
                  </div>
                </div>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}