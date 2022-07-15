import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Link as MaterialLink
} from '@mui/material';

import logo from '../assets/images/Health Buddy - Logo.png';

const HeaderPages = () => {
  return (
    <Box className='header-container' style={{background: 'rgb(40,40,40)'}}>
          <Box className='logo-container' >
            <img src={logo} alt ='Logo' />
            <Typography variant='h1' style={{fontFamily: 'Times New Roman, Times, serif', fontWeight: 'bold', fontSize: '50px', marginLeft: '20px', color: 'rgba(255,255,255,.87)'}}>
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
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'rgba(255,255,255,.87)'}}>
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
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'rgba(255,255,255,.87)'}}>
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
                  <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'rgba(255,255,255,.87)'}}>
                    Feedback
                  </Typography>
                </MaterialLink>
              </Grid>
            </Grid>

          </nav>
        </Box>
  );
};

export default HeaderPages;