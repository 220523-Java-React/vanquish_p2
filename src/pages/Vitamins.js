import NavMenu from "../components/NavMenu";
import VitaminsCalc from "../utils/VitaminsCalc";
import { vitamins } from '../utils/resourceFacts';
import { Typography, Box, Link } from "@mui/material";

const Vitamins = () => {

  let vitacalc = VitaminsCalc(4)

  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}>Vitamins</div>

      <NavMenu />
        {/* {Object.keys(vitacalc).map((key, index) => {
          return (
            <h2>{key}: {vitacalc[key]}</h2>
          )
        })} */}
<section className="fact">
      {vitamins.map((vitamin, index) => (
          <Box key={index}>
              <Typography variant='h4'>
                  {vitamin.name}
              </Typography>
              <Typography>
                  {vitamin.description}
              </Typography>
              <Typography>
                  For more information click&nbsp;
                  <Link href={vitamin.url}>
                      here
                  </Link>
                  .
              </Typography>
          </Box>
      ))} 
       </section>
    </>
  )
};

export default Vitamins;
