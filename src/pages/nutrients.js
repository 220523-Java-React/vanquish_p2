import { Typography, Box, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';
import { nutrients } from '../utils/resourceFacts';

const Nutrients = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>Nutrients</div>

      <NavMenu />
      
      <section>
            {nutrients.map((nutrient, index) => (
                <Box key={index}>
                    <Typography variant='h4'>
                        {nutrient.name}
                    </Typography>
                    <Typography>
                        {nutrient.description}
                    </Typography>
                    <Typography>
                        For more information click&nbsp;
                        <Link href={nutrient.url}>
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

export default Nutrients;