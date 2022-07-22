import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Link as MateriaLink
} from '@mui/material';

import NavMenu from '../components/NavMenu';
import { API, APIGet } from '../utils/api';
import simulation from '../utils/simulation';



APIGet('minerals').then(handleResponse
);

function handleResponse(response){
const data = response.data;
 
<p>{data}</p>

}


const BodyFeedback = ({results, name}) => {

  results = simulation();


  // let general = [
  //   {
  //     title: 'bmi',
  //     reading: 'BMI reading here'
  //   },
  //   {
  //     title: 'bf',
  //     reading: 'BF reading here'
  //   },
  //   {
  //     title: 'whe',
  //     reading: 'WHE reading here'
  //   },
  //   {
  //     title: 'whe',
  //     reading: 'WHI reading here'
  //   }
  // ];

  // let vitamins = [
  //   {
  //     vitamin: 'Vitamin A',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin C',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin D',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin E',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin K',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B1',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B2',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B3',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B5',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B7',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B6',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B12',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     vitamin: 'Vitamin B9',
  //     recommendation: 'recommendation'
  //   }
  // ];

  // let nutrients = [
  //   {
  //     nutrient: 'Calories',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     nutrient: 'Carbs',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     nutrient: 'Protein',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     nutrient: 'Fat',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     nutrient: 'Water',
  //     recommendation: 'recommendation'
  //   }
  // ]

  // let minerals = [
  //   {
  //     mineral: 'Choline',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Magnesium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Calcium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Zinc',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Copper',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Selenium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Manganese',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Phosphorus',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Potassium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Iodine',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Chromium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Molhybdenum',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Fluoride',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Sodium',
  //     recommendation: 'recommendation'
  //   },
  //   {
  //     mineral: 'Chloride',
  //     recommendation: 'recommendation'
  //   }
  // ];

  // let tempResults = [];
  // tempResults[0] = general;
  // tempResults[1] = vitamins;
  // tempResults[2] = nutrients;
  // tempResults[3] = minerals;

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
        <handleResponse />
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
        
        <Box className='feedback_featured_container'>
          <Grid container className='table_featured' justifyContent='center'>
            <Grid item xs={12} className='table_header'>
              General Recommendations
            </Grid>

            {results[0].map((item, index) => (
                <Grid container key={index}>
                  <Grid item className='table_field' xs={2}>
                    {item.title}
                  </Grid>
                  <Grid item className='table_field' xs={10}>
                    {item.reading}
                  </Grid>
                </Grid>
            ))} 

          </Grid>
        </Box>

        <Grid container justifyContent='space-between' spacing={10}>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                Vitamin Recommendations
              </Grid>
              
              {results[1].map((item, index) => (
                <Grid container key={index}>
                  <Grid item className='table_field' xs={6}>
                    {item.vitamin}
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    {item.recommendation}
                  </Grid>
                </Grid>
              ))} 

            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                Macronutrient Recommendations
              </Grid>
              
              {results[2].map((item, index) => (
                <Grid container key={index}>
                  <Grid item className='table_field' xs={6}>
                    {item.nutrient}
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    {item.recommendation}
                  </Grid>
                </Grid>
              ))} 

            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container className='table_container' justifyContent='center'>
              <Grid item xs={12} className='table_header'>
                Mineral Recommendations
              </Grid>
              
              {results[3].map((item, index) => (
                <Grid container key={index}>
                  <Grid item className='table_field' xs={6}>
                    {item.mineral}
                  </Grid>
                  <Grid item className='table_field' xs={6}>
                    {item.recommendation}
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