import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Link as MateriaLink
} from '@mui/material';

import NavMenu from '../components/NavMenu';
import { textAlign } from '@mui/system';

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
                    color: 'lightlightblue',
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
        
        <Box style={{display: 'flex', justifyContent: 'center', margin: '40px 0'}}>
          <Grid container justifyContent='center' style={{border: '2px solid black', width: '50%'}}>
            <Grid item xs={12} style={{background: 'orange', border: '2px solid black', textAlign: 'center'}}>
              General Recommendations
            </Grid>
            <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
              BMI
            </Grid>
            <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
              BMI Read goes here
            </Grid>
            <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
              BF
            </Grid>
            <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
              BF Read goes here
            </Grid>
            <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
              WHE
            </Grid>
            <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
              WHE Read goes here
            </Grid>
            <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
              WHI
            </Grid>
            <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
              WHI Read goes here
            </Grid>
          </Grid>

        </Box>

        <Grid container justifyContent='space-between' spacing={5}>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center' style={{border: '2px solid black'}}>
              <Grid item xs={12} style={{background: 'orange', border: '2px solid black', textAlign: 'center'}}>
                Vitamin Recommendations
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                VITAMIN A
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                500mg
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                VITAMIN B
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                1500mg
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                VITAMIN C
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                2500mg
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center' style={{border: '2px solid black'}}>
            <Grid item xs={12} style={{background: 'orange', border: '2px solid black', textAlign: 'center'}}>
                Macronutrient Recommendations
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Calories
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                2000
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Water
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                100 oz
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Fat
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                500g
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container justifyContent='center' style={{border: '2px solid black'}}>
              <Grid item xs={12} style={{background: 'orange', border: '2px solid black', textAlign: 'center'}}>
                Mineral Recommendations
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Choline
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                2000
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Mineral 2
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                100 
              </Grid>
              <Grid item xs={6} style={{background: 'lightblue', border: '2px solid black'}}>
                Mineral 3
              </Grid>
              <Grid item xs={6} style={{background: 'pink', border: '2px solid black'}}>
                500
              </Grid>
            </Grid>
          </Grid>
          
          
        </Grid>
      </section>

      <NavMenu />
    </>
    
  );
};

export default BodyFeedback;