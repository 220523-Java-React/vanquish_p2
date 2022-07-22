import { Typography, Box, Link } from '@mui/material';
import NavMenu from '../components/NavMenu';
import { nutrients } from '../utils/resourceFacts';

const Nutrients = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}></div>

      <NavMenu />
      
      <section className="fact">
            {nutrients.map((nutrient, index) => (
                <Box key={index} sx={{
                    width: 400,
                    height: 180,
                    display: 'inline-block',
                    marginBlock: 2,
                    marginRight: 6,
                    justifyContent: 'space-evenly',
                    alignItems: 'start',
                    overflow: 'hidden',
                }}>
                    <Typography variant='h4'>
                        {nutrient.name}
                    </Typography>
                    <Typography variant='paragraph'>
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
