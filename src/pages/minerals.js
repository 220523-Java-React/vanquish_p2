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
          {minerals.map((mineral, index) => (
            <Box key={index}>
              <Link href={mineral.url} target='_blank'>{mineral.name}</Link>
              <Typography style={{marginBottom: '10px'}}>{mineral.description}</Typography>
            </Box>
          ))}
        </section>       

      <NavMenu />
      
    </>
  );
};

export default Minerals;