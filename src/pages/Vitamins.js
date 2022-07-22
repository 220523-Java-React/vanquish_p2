import NavMenu from "../components/NavMenu";
import VitaminsCalc from "../utils/VitaminsCalc";
import { vitamins } from '../utils/resourceFacts';
import { Typography, Box, Link } from "@mui/material";

const Vitamins = () => {

  let vitacalc = VitaminsCalc(4)

  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}></div>

      <NavMenu />
        {/* {Object.keys(vitacalc).map((key, index) => {
          return (
            <h2>{key}: {vitacalc[key]}</h2>
          )
        })} */}
<section className="fact">
      {vitamins.map((vitamin, index) => (
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
                  {vitamin.name}
              </Typography>
              <Typography variant='paragraph'>
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
