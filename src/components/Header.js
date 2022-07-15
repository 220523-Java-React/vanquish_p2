import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Link as MaterialLink
} from '@mui/material';

import logo from '../assets/images/Health Buddy - Logo.png';

export default function Header() {
  return (
    <>
      <header>
        <Box class='header-container'>
          <Box class='logo-container' >
            <img src={logo} alt ='Logo' />
            <Typography variant='h1' style={{fontFamily: 'Times New Roman, Times, serif', fontWeight: 'bold', fontSize: '50px', marginLeft: '20px'}}>
              Health Buddy
            </Typography>
          </Box>
          
          <nav>
            <Grid container justifyContent='space-evenly' alignItems='center' spacing={10}>
              
              <Grid item>
                <MaterialLink
                  to='/'
                  component={RouterLink}
                  underline='none'
                  variant='body1'
                >
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                    Home
                  </Typography>
                </MaterialLink>
              </Grid>

              <Grid item>
                <MaterialLink
                  to='/Login'
                  component={RouterLink}
                  underline='none'
                  variant='body1'
                >
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                    Login
                  </Typography>
                </MaterialLink>
              </Grid>

              <Grid item>
              <MaterialLink
                  to='/body-feedback'
                  component={RouterLink}
                  underline='none'
                  variant='body1'
                >
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                    Feedback
                  </Typography>
                </MaterialLink>
              </Grid>
            </Grid>

          </nav>
        </Box>
      </header>
    </>
  );
}