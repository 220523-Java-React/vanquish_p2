import NavMenu from '../components/NavMenu';
import { minerals } from '../utils/ArrayFacts';
import { Typography } from '@mui/material';



const Minerals = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>Minerals</div>
        <a href={minerals[0].url}>Choline</a>
        <Typography>{minerals[0].description}</Typography><br></br>
        <a href={minerals[0].url}>Magnesium</a>
        <Typography>{minerals[1].description}</Typography><br></br>
        <a href={minerals[0].url}>Calcium</a>
        <Typography>{minerals[2].description}</Typography><br></br>
        <a href={minerals[0].url}>Zinc</a>
        <Typography>{minerals[3].description}</Typography><br></br>
        <a href={minerals[0].url}>Copper</a>
        <Typography>{minerals[4].description}</Typography><br></br>
        <a href={minerals[0].url}>Selenium</a>
        <Typography>{minerals[5].description}</Typography><br></br>
        <a href={minerals[0].url}>Manganese</a>
        <Typography>{minerals[6].description}</Typography><br></br>
        <a href={minerals[0].url}>Phosphorus</a>
        <Typography>{minerals[7].description}</Typography><br></br>
        <a href={minerals[0].url}>Potassium</a>
        <Typography>{minerals[8].description}</Typography><br></br>
        <a href={minerals[0].url}>Iodine</a>
        <Typography>{minerals[9].description}</Typography><br></br>
        <a href={minerals[0].url}>Chromium</a>
        <Typography>{minerals[10].description}</Typography><br></br>
        <a href={minerals[0].url}>Molhybdenum</a>
        <Typography>{minerals[11].description}</Typography><br></br>
        <a href={minerals[0].url}>Fluoride  </a>
        <Typography>{minerals[12].description}</Typography><br></br>
        <a href={minerals[0].url}>Sodium chloride</a>
        <Typography>{minerals[13].description}</Typography><br></br>
        <a href={minerals[0].url}>Choline</a>
        <Typography>{minerals[14].description}</Typography><br></br>
       
      <NavMenu />
      
     
 
      
    </>
  );
};

export default Minerals;