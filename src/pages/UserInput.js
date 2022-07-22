import NavMenu from "../components/NavMenu";

import waistimg from '../assets/images/waist.png';
import hipimg from '../assets/images/hip.png';
import heightimg from '../assets/images/height.png';
import neckimg from '../assets/images/neck.png';
import { Calculate } from "@mui/icons-material";
import Calculator from "../utils/UpdateMinerals";

const UserInput = ({setResults}) => {

  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}>User Input</div>

      <NavMenu />
      <Calculator />
      

        <form id="userinputs" className="container">
        <p>Please fill in the following below to recieve your body information and health recommendations. </p>
          <div className="mySlides">
            <span class="left"></span>
              <span class="right">
              Select a unit of measure:
              <input type="radio" id="inlbs" name="unit" value="1" required />
              <label for="inlbs">US (inches & lbs)</label><br />
              <input type="radio" id="cmkg" name="unit" value="2" />
              <label for="cmkg">Metric (cm & kg)</label>
            </span>
          </div>

          <div className="mySlides">
          <span class="left"></span>
          <span class="right">
          Select your gender:
            <input type="radio" id="male" name="gender" value="1" required />
            <label for="male">Male</label><br />
            <input type="radio" id="female" name="gender" value="2" />
            <label for="female">Female</label>
          </span>
          </div>

          <div className="mySlides">
          <span class="left"></span>
          <span class="right">
          Enter your age: 
            <input type="number" id="age" name="age" placeholder="i.e.23" required />
          </span>
          </div>

          <div className="mySlides">
          <span class="left"></span>
          <span class="right">
            Enter your weight:
          <input type="number" id="weight" name="weight" placeholder="i.e. 130" required />
          </span>
          </div>

          <div className="mySlides">
            <span class="left"><img class ="howtom" src={heightimg} /></span>
            <span class="right">Enter your height: <input type="number" id="height" name="height" placeholder="i.e. 66" required /></span>
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={neckimg} /></span>
          <span class="left">Enter your neck circumference: </span><input type="number" id="neck" placeholder="i.e. 18" name="neck" required />
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={waistimg} /></span>
          <span class="right">Enter your waist circumference: 
          <input type="number" id="waist" placeholder="i.e. 32" required /></span>
          </div>

          <div className="mySlides">
          <span class="left"><img class ="howtom" src={hipimg} /></span>
          <span class="right">Enter your hip circumference: <input type="number" id="hip" placeholder="i.e. 34" name="hip" required /></span>
          </div>

          <div className="mySlides">
          <span class="left"></span>
          <span class="right">
          Enter activity level:
            <input type="radio" id="sed" name="activity" value="1" required />
            <label for="sed">Sedentary</label>
            <input type="radio" id="litact" name="activity" value="2" />
            <label for="litact">Lightly Active</label>
            <input type="radio" id="modact" name="activity" value="3" />
            <label for="modact">Moderately Active</label>
            <input type="radio" id="veryact" name="activity" value="4" />
            <label for="veryact">Very Active</label>
            <input type="radio" id="extact" name="activity" value="5" />
            <label for="extact">Extremely Active</label>
          </span>
          </div>

          <div className="mySlides">
          <span class="left">Enter your weight goal: </span>
          <span class="right">
            <input type="radio" id="losefast" name="goal" value="1" required />
            <label for="losefast">Lose Fast</label>
            <input type="radio" id="losenorm" name="goal" value="2" />
            <label for="losenorm">Lose Normal</label>
            <input type="radio" id="maintain" name="goal" value="3" />
            <label for="maintain">Maintain</label>
            <input type="radio" id="gainnorm" name="goal" value="4" />
            <label for="gainnorm">Gain Noraml</label>
            <input type="radio" id="gainfast" name="goal" value="5" />
            <label for="gainfast">Gain Fast</label>
          </span>
          </div>

          <button class="button button1">Enter</button> 
        </form>
    </>
  );
};

export default UserInput;