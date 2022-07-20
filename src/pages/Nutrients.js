import NavMenu from '../components/NavMenu';

const Nutrients = () => {
  return (
    <>
      <div style={{fontSize: '200px', marginTop: '100px'}}>Nutrients</div>

      <NavMenu />
      
      <section>
            <p>Here is your daily recommended amount of nutrients that you should intake.</p>
            <h2>
                Nutrients
            </h2>
        
            <h4>
                Calories
            </h4>
            <p>Calories are essential for fueling the body. Whether you are trying to lose, maintain, or gain weight, 
                tracking and understanding the science behind caloric intake is very important. <br/>
                For more info click <a href="https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/calories/art-20048065"> here</a>
            </p>
        
            <h4>
                Carbs
            </h4>
            <p>Carbs allow for the human body to be able to fuel itself through the day, especially if the day is extremely active.
                However, consuming too many carbs can have negative affects on the body. <br/>
                For more info click <a href="https://www.betterhealth.vic.gov.au/health/healthyliving/weight-loss-and-carbohydrates">here</a>
            </p>
        
            <h4>
                Protein
            </h4>
            <p>Protein is essential when it comes to helping build strength within your bones, muscles, cartilage and skin.
                It is also essential when it comes to building and repairing tissue. <br/>
                For more info click <a href=" https://www.piedmont.org/living-better/why-is-protein-important-in-your-diet"> here</a>
            </p>
        
            <h4>
                Fat
            </h4>
            <p>Fat does not seem like somethign to be included in a diet, but it is actually very beneficial.
                Fats are responsible for helping your body absorb nutrients and produce important hormones. <br/>
                For more info click <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/dietary-fats#:~:text=Dietary%20fats%20are%20essential%20to,and%20produce%20important%20hormones%2C%20too.">here</a>
            </p>
        
            <h4>
                Water
            </h4>
            <p>Water is very important fopr many things. It can provide nutrients and oxygen to your cells. 
                Or it can even do things like regulate body temperature and lubricate joints. <br/>
                For more info click <a href=" https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/water-essential-to-your-body"> here</a>
            </p>
        </section>
    </>
  );
};

export default Nutrients;
