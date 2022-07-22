import NavMenu from "../components/NavMenu";

import waistimg from '../assets/images/waist.png';
import hipimg from '../assets/images/hip.png';
import heightimg from '../assets/images/height.png';
import neckimg from '../assets/images/neck.png';
import { Calculate } from "@mui/icons-material";
import Calculator from "../utils/UpdateMinerals";
import simulation from "../utils/simulation";

const UserInput = ({setResults}) => {
 /*
  const runSimulation = () => {
    setResults(simulation());
  };

  runSimulation();
*/
  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}>User Input</div>

      <NavMenu />
      <Calculator />
      

        <form id="userinputs" className="container">
        <p>Please fill in the following below to recieve your body information and health recommendations. </p>
          <div className="mySlides">
            <span class="left">
              <div class="que">Select Unit of Measurement</div>
              <div class="ans"><input type="radio" id="inlbs" name="unit" value="1" required />
              <label for="inlbs">US (inches & lbs)</label><br />
              <input type="radio" id="cmkg" name="unit" value="2" />
              <label for="cmkg">Metric (cm & kg)</label></div>
            </span>
          <span class="right">
          <div class="que">Select Your Gender</div>
          <div class="ans"><input type="radio" id="male" name="gender" value="1" required />
            <label for="male">Male</label><br />
            <input type="radio" id="female" name="gender" value="2" />
            <label for="female">Female</label></div>
          </span>
          </div>

          <div className="mySlides">
          <span class="left">
          <div class="que">Enter Your Age</div>
          <div class="ans"><input type="number" id="age" name="age" placeholder="i.e. 23" required /></div>
          </span>

          <span class="right">
          <div class="que">Enter Your Weight</div>
          <div class="ans"><input type="number" id="weight" name="weight" placeholder="i.e. 130 (lbs) or 59 (kg)" required /></div>
          </span>
          </div>

          <div className="mySlides">
            <span class="left"><img class ="howtom" src={heightimg} /></span>
            <span class="right"><div class="que">Enter Your Height</div>
            <div class="ans"><input type="number" id="height" name="height" placeholder="i.e. 67 (in) or 170 (cm)" required /></div>
            </span>
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={neckimg} /></span>
          <span class="right"><div class="que">Enter Your Neck Circumference</div>
          <div class="ans"><input type="number" id="neck" placeholder="i.e. 14 (in) or 36 (cm)" name="neck" required /></div>
          </span>
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={waistimg} /></span>
          <span class="right"><div class="que">Enter Your Waist Circumference</div>
          <div class="ans"><input type="number" id="waist" placeholder="i.e. 38 (in) or 98 (cm)" required /></div></span>
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={hipimg} /></span>
          <span class="right">
            <div class="que">Enter your Hip Circumference</div> 
            <div class="ans"><input type="number" id="hip" placeholder="i.e. 40 (in) or 102 (cm)" name="hip" required /></div></span>
          </div>

          <div className="mySlides">
          <span class="left">
          <div class="que">Enter Your Activity Level</div>
          <div class="ans">
            <input type="radio" id="sed" name="activity" value="1" required />
            <label for="sed">Sedentary</label><br />
            <input type="radio" id="litact" name="activity" value="2" />
            <label for="litact">Lightly Active</label><br />
            <input type="radio" id="modact" name="activity" value="3" />
            <label for="modact">Moderately Active</label><br />
            <input type="radio" id="veryact" name="activity" value="4" />
            <label for="veryact">Very Active</label><br />
            <input type="radio" id="extact" name="activity" value="5" />
            <label for="extact">Extremely Active</label>
            </div>
          </span>

          <span class="right">
          <div class="que">Enter Your Weight Goal</div>
          <div class="ans">
            <input type="radio" id="losefast" name="goal" value="1" required />
            <label for="losefast">Lose Fast</label><br />
            <input type="radio" id="losenorm" name="goal" value="2" />
            <label for="losenorm">Lose Normal</label><br />
            <input type="radio" id="maintain" name="goal" value="3" />
            <label for="maintain">Maintain</label><br />
            <input type="radio" id="gainnorm" name="goal" value="4" />
            <label for="gainnorm">Gain Noraml</label><br />
            <input type="radio" id="gainfast" name="goal" value="5" />
            <label for="gainfast">Gain Fast</label>
            </div>
          </span>
          </div>
          <div className="mySlides"><button class="button">Enter</button> </div>
          
        </form>
    </>
  );
};

export default UserInput;