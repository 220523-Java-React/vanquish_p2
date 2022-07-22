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
      <div style={{fontSize: '100px', marginTop: '100px'}}></div>
      <NavMenu />

       
        
      <section className="fact">
        {minerals.map((mineral, index) => (
          <Box key={index} sx={{
            width: 400,
            height: 220,
            display: 'inline-block',
            marginBlock: 2,
            marginRight: 6,
            justifyContent: 'space-evenly',
            alignItems: 'start',
            overflow: 'hidden',
        }}>
            <Typography variant='h4'>
                {mineral.name}
            </Typography>
            <Typography variant='paragraph'>
                {mineral.description}
            </Typography>
            <Typography >
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
