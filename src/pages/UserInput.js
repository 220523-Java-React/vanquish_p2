import NavMenu from "../components/NavMenu";

const UserInput = ({setResults}) => {

  return (
    <>
      <div style={{fontSize: '100px', marginTop: '100px'}}>User Input</div>

      <NavMenu />
      
      <section>
        <p>Please fill in the following below to recieve your body information and health recommendations.</p>
        <form id="userinputs">

          <fieldset>
            Select a unit of measure:
            <input type="radio" id="inlbs" name="unit" value="1" required />
            <label for="inlbs">US (in/lbs)</label>
            <input type="radio" id="cmkg" name="unit" value="2" />
            <label for="cmkg">Metric (cm/kg)</label>
          </fieldset>
          <fieldset>
            Select your gender:
            <input type="radio" id="male" name="gender" value="1" required />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="2" />
            <label for="female">Female</label>
          </fieldset>
          <fieldset>
            Enter your age: <input type="number" id="age" name="age" required />
          </fieldset>
          <fieldset>
            Enter your height: <input type="number" id="height" name="height" required />
          </fieldset>
          <fieldset>
            Enter your weight: <input type="number" id="weight" name="weight" required />
          </fieldset>
          <fieldset>
            Enter your waist circumference: <input type="number" id="waist" name="waist" required />
          </fieldset>
          <fieldset>
            Enter your neck circumference: <input type="number" id="neck" name="neck" required />
          </fieldset>
          <fieldset>
            Enter your hip circumference: <input type="number" id="hip" name="hip" required />
          </fieldset>
          <fieldset>
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
          </fieldset>
          <fieldset>
            Enter your weight goal: 
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
          </fieldset>
          <button class="button button1">Enter</button> 
        </form>
      </section>
    </>
  );
};

export default UserInput;