import NavMenu from '../components/NavMenu';
import { minerals } from '../utils/ArrayFacts';
import { 
  Typography,
  Box,
  Link
} from '@mui/material';

const Minerals = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>Minerals</div>
        
        <section>
          <Box>
            <Link href={minerals[0].url}>Choline</Link>
            <Typography style={{marginBottom: '10px'}}>{minerals[0].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Magnesium</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[1].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Calcium</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[2].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Zinc</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[3].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Copper</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[4].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Selenium</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[5].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Manganese</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[6].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Phosphorus</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[7].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Potassium</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[8].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Iodine</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[9].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Chromium</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[10].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Molhybdenum</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[11].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Fluoride  </Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[12].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Sodium chloride</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[13].description}</Typography>
          </Box>
          <Box>
            <Link href={minerals[0].url}>Choline</Link>
            <Typography style={{marginBottom: '20px'}}>{minerals[14].description}</Typography>
          </Box>
        </section>       

      <NavMenu />
      
    </>
  );
};

export default Minerals;