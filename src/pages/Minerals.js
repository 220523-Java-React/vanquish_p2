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
      <div style={{fontSize: '100px', marginTop: '100px'}}>Minerals</div>
      <NavMenu />
      {/* <br></br>
      <br></br>
      <Calculator /> */}
        
       
      <section>
        {minerals.map((mineral, index) => (
          <Box key={index}>
            <Typography variant='h4'>
                {mineral.name}
            </Typography>
            <Typography>
                {mineral.description}
            </Typography>
            <Typography>
                For more information click&nbsp;
                <Link href={mineral.url}>
                    here
                </Link>
                .
            </Typography>
          </Box>
        ))} 
      </section>       

       
      
    </>
  );
};

export default Minerals;
