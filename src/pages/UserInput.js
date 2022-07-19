import NavMenu from "../components/NavMenu";

const UserInput = ({setResults}) => {

  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>User Input</div>

      <NavMenu />
      
      <section>
        <p>Please fill in the following below to recieve your body information and health recommendations.</p>
        <h2>User Input</h2>
        <form id="userinputs">

          <fieldset>
            Select a unit of measure:
            <input type="radio" id="inlbs" name="unit" value="US(in/lbs)" required />
            <label for="inlbs">US (in/lbs)</label>
            <input type="radio" id="cmkg" name="unit" value="Metric(cm/kg)" />
            <label for="cmkg">Metric (cm/kg)</label>
          </fieldset>
          <fieldset>
            Select your gender:
            <input type="radio" id="male" name="gender" value="male" required />
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
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
            <input type="radio" id="sed" name="activity" value="sedentary" required />
            <label for="sed">Sedentary</label>
            <input type="radio" id="litact" name="activity" value="lightlyactive" />
            <label for="litact">Lightly Active</label>
            <input type="radio" id="modact" name="activity" value="moderatelyactive" />
            <label for="modact">Moderately Active</label>
            <input type="radio" id="veryact" name="activity" value="veryactive" />
            <label for="veryact">Very Active</label>
            <input type="radio" id="extact" name="activity" value="extremelyactive" />
            <label for="extact">Extremely Active</label>
          </fieldset>
          <fieldset>
            Enter your weight goal: 
            <input type="radio" id="losefast" name="goal" value="losefast" required />
            <label for="losefast">Lose Fast</label>
            <input type="radio" id="losenorm" name="goal" value="losenormal" />
            <label for="losenorm">Lose Normal</label>
            <input type="radio" id="maintain" name="goal" value="maintain" />
            <label for="maintain">Maintain</label>
            <input type="radio" id="gainnorm" name="goal" value="gainnormal" />
            <label for="gainnorm">Gain Noraml</label>
            <input type="radio" id="gainfast" name="goal" value="gainfast" />
            <label for="gainfast">Gain Fast</label>
          </fieldset>

        </form>
      </section>
    </>
  );
};

export default UserInput;