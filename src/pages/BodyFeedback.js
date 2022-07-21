import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Link as MateriaLink
} from '@mui/material';

import NavMenu from '../components/NavMenu';

const BodyFeedback = ({results, name}) => {

  if (results.length === 0) {
    return (
      <>
        <Grid container justifyContent='center' alignItems='center' style={{background: 'rgb(220,220,220)'}}>
          <Grid item>
            <Typography variant='h1' style={{marginTop: '150px', fontSize: '150px', fontFamily: 'serif', fontWeight: 'bold', textAlign: 'center'}}>
              NO RESULTS FOUND!!!!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' >
              Enter your body information to see your results.
            </Typography>
            <Box style={{display: 'flex', justifyContent: 'center', margin: '40px 0'}}>
              <MateriaLink 
                to='/user-input' 
                component={RouterLink}
                underline='none'
              >
                <Typography variant='h5'
                  style={{
                    background: 'black', 
                    padding: '20px 25px', 
                    borderRadius: '5px',
                    // border: '2px solid ', 
                    color: 'lightblue',
                    fontWeight: 'bold'
                  }}
                >
                  ENTER MY DATA NOW
                </Typography>
              </MateriaLink>
            </Box>
            
          </Grid>          
        </Grid>
        
        <NavMenu />
      </>
    );
  }

  return (
    <>
      {/* <div style={{fontSize: '200px', marginTop: '100px'}}>BodyFeedback</div> */}

      <section style={{marginTop: '100px', padding: '50px'}}>
        <h2>
          Body Feedback for {name}
        </h2>
        <p>Here's your feedback based on the results you've recieved on the body info page.</p>
        
        <Box>
            GENERAL Recommendations  
        </Box>

        <Grid container justifyContent='space-between'>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center'>
              Vitamin Recommendations
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center'>
              Nutrient Recommendations
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center'>
              Mineral Recommendations
            </Grid>
          </Grid>
        </Grid>
      </section>

      <NavMenu />
    </>
    
  );
};

export default BodyFeedback;