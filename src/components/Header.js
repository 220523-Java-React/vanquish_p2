import { useLocation, Link as RouterLink } from 'react-router-dom'; 
import {
  Grid,
  Box,
  Typography,
  Link as MaterialLink
} from '@mui/material';

import logo from '../assets/images/Health Buddy - Logo.png';

export default function Header() {

  const location = useLocation();
  const isHomePage = (location.pathname === '/') ? true : false;

  return (
    <>
      <header>
        <Box className={isHomePage ? 'header-container' : 'header-container-dark'}>
          <MaterialLink to='/' className='logo-container' underline='none' component={RouterLink}>
            <img src={logo} alt ='Logo' />
            <Typography 
              className={isHomePage ? 'header-text' : 'header-dark-text'}
              variant='h1' 
              style={{fontFamily: 'Times New Roman, Times, serif', fontWeight: 'bold', fontSize: '50px', marginLeft: '20px'}}
            >
              Health Buddy
            </Typography>
          </MaterialLink>
          
          <nav>
            <Grid container justifyContent='space-evenly' alignItems='center' spacing={10}>
              
              <Grid item>
                <MaterialLink
                  to='/'
                  component={RouterLink}
                  underline='none'
                  variant='body1'
                >
                  <Typography
                    style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase'}}
                    className={isHomePage ? 'header-text' : 'header-dark-text'}
                  >
                    Home
                  </Typography>
                </MaterialLink>
              </Grid>

              <Grid item>
                <MaterialLink
                  to='/login'
                  component={RouterLink}
                  underline='none'
                  variant='body1'
                >
                  <Typography
                    style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase'}}
                    className={isHomePage ? 'header-text' : 'header-dark-text'}
                  >
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
                  <Typography
                    style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase'}}
                    className={isHomePage ? 'header-text' : 'header-dark-text'}
                  >
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