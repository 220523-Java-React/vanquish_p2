import NavMenu from "../components/NavMenu";
import VitaminsCalc from "../utils/VitaminsCalc";
import { vitamins } from '../utils/resourceFacts';

const Vitamins = () => {

  let vitacalc = VitaminsCalc(4)

  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}>Vitamins</div>

      <NavMenu />
        {Object.keys(vitacalc).map((key, index) => {
          return (
            <h2>{key}: {vitacalc[key]}</h2>
          )
        })}

        {/*
        {vitamins.map((vitamin, index) => (
            <h2>{vitamin.description}</h2>
        ))}
        */}
    </>
  )
};

export default Vitamins;