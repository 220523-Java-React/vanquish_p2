import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Typography,
  Link as MaterialLink
} from '@mui/material';

const NavMenu = () => {
  return (
    <Grid container style={{background: 'lightblue', padding: '20px'}} justifyContent='center'>
      <nav>
        <Grid container justifyContent='space-evenly' alignItems='center' spacing={10}>
          
          <Grid item>
            <MaterialLink
              to='/body-info'
              component={RouterLink}
              underline='none'
              variant='body1'
            >
              <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                Body Info
              </Typography>
            </MaterialLink>
          </Grid>

          <Grid item>
            <MaterialLink
              to='/minerals'
              component={RouterLink}
              underline='none'
              variant='body1'
            >
              <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                Minerals
              </Typography>
            </MaterialLink>
          </Grid>

          <Grid item>
            <MaterialLink
              to='/nutrients'
              component={RouterLink}
              underline='none'
              variant='body1'
            >
              <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                Nutrients
              </Typography>
            </MaterialLink>
          </Grid>

          <Grid item>
            <MaterialLink
              to='/progress'
              component={RouterLink}
              underline='none'
              variant='body1'
            >
              <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                Progress
              </Typography>
            </MaterialLink>
          </Grid>

          <Grid item>
            <MaterialLink
              to='/vitamins'
              component={RouterLink}
              underline='none'
              variant='body1'
            >
              <Typography style={{fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}>
                Vitamins
              </Typography>
            </MaterialLink>
          </Grid>

        </Grid>  
      </nav>
    </Grid>
  );
};

export default NavMenu;

      // <ul NavMenu>
      //   <li>Body Info</li>
      //   <li>Body Feedback</li>
      //   <li>Minerals</li>
      //   <li>Nutrients</li>
      //   <li>Progress</li>
      //   <li>Vitamins</li>
      // </ul>
