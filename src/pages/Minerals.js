import NavMenu from '../components/NavMenu';
import { minerals } from '../utils/resourceFacts';
import { 
  Typography,
  Box,
  Link
} from '@mui/material';
import Calculator from '../utils/UpdateMinerals';
import BasicTable from '../components/BasicTable';

const Minerals = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>Minerals</div>
      <NavMenu />
      <br></br>
      <br></br>
      <Calculator />
        
       
        <section>
          {minerals.map((mineral, index) => (
            <Box key={index}>
              <Link href={mineral.url} target='_blank'>{mineral.name}</Link>
              <Typography style={{marginBottom: '10px'}}>{mineral.description}</Typography>
            </Box>
          ))}
        </section>       

       
      
    </>
  );
};

export default Minerals;
