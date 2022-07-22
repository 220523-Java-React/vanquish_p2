import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Link as MateriaLink
} from '@mui/material';

import NavMenu from '../components/NavMenu';
import { API, APIGet } from '../utils/api';

APIGet('minerals').then(handleResponse
);

function handleResponse(response){
const data = response.data;
return( 
<p>{data}</p>
)
}

const BodyFeedback = ({results, name}) => {

  if (results.length === 0) {
    return (
      <>
        <Grid container className='feedback_none_container' justifyContent='center' alignItems='center'>
          <Grid item xs={12}>
            <Typography className='feedback_none_title' variant='h1'>
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
        <handleResponse />
        <NavMenu />
      </>
    );
  }

  return (
    <>
      {/* <div style={{fontSize: '200px', marginTop: '100px'}}>BodyFeedback</div> */}

      <section className='feedback_page_container'>
        <h2 className='feedback_page_title'>
          Body Feedback for {name}
        </h2>
        <h3>Here's your feedback based on the results you've recieved on the body info page.</h3>
        
        <Box className='feedback_featured_container'>
          <Grid container className='table_featured' justifyContent='center'>
            <Grid item xs={12} className='table_header'>
              <h4 className='table_title'>
                General Recommendations
              </h4>
              <img src={genimg} alt="Vitamins"  className="titleimg" />
            </Grid>

            {results[0].map((item, index) => (
              <Grid container key={index} className='table_nth_color'>
                <Grid item className='table_field' xs={2}>
                  <p className='table_text'>
                    {item.title}
                  </p>
                </Grid>
                <Grid item className='table_field' xs={10}>
                  <p className='table_text'>
                    {item.reading}
                  </p>
                </Grid>
              </Grid>
            ))} 

          </Grid>
        </Box>

        <Grid container justifyContent='space-between' spacing={10}>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                <h4 className='table_title'>
                  Vitamin Recommendations
                </h4>
                <img src={vitimg} alt="Vitamins"  className="titleimg" />
              </Grid>
              
              {results[1].map((item, index) => (
                <Grid container key={index} className='table_nth_color'>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.vitamin}
                    </p>
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.recommendation}
                    </p>
                  </Grid>
                </Grid>
              ))} 

            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                <h4 className='table_title'>
                  Macronutrient Recommendations
                </h4>
                <img src={macimg} alt="Macro Nutrients" className="titleimg" />
              </Grid>
              
              {results[2].map((item, index) => (
                <Grid container key={index} className='table_nth_color'>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.nutrient}
                    </p>
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.recommendation}
                    </p>
                  </Grid>
                </Grid>
              ))} 

            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                <h4 className='table_title'>
                  Mineral Recommendations
                </h4>
                <img src={minimg} alt="Minerals" className="titleimg" />
              </Grid>
              
              {results[3].map((item, index) => (
                <Grid container key={index} className='table_nth_color'>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.mineral}
                    </p>
                    
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    <p className='table_text'>
                      {item.recommendation}
                    </p>
                  </Grid>
                </Grid>
              ))} 
            </Grid>
          </Grid>
          
        </Grid>
      </section>

      <NavMenu />
    </>
    
  );
};

export default BodyFeedback;