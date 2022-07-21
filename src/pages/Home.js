import { useState } from 'react';

import NavMenu from '../components/NavMenu';
import vitimg from '../assets/images/vitamins.png';
import minimg from '../assets/images/minerals.png';
import macimg from '../assets/images/macro.png';
import watimg from '../assets/images/water.png';
import kidimg from '../assets/images/kids.png';
import teeimg from '../assets/images/teen.png';
import momimg from '../assets/images/adult.png';
import eldimg from '../assets/images/elderly.png';
import sitimg from '../assets/images/running.png';
import runimg from '../assets/images/sitting.png';
import grdimg from '../assets/images/gardening.png';
import wlkimg from '../assets/images/walking.png';


const Home = ({name}) => {
  
  // const [user, setUser] = useState({});
  
  // useEffect(() => {
  //   APIGet("userinfo/username/Sandyuvstx").then(response => {
  //     setUser(response.data);
  //   })
  // }, []);
  
  return (
    <>
      <section>
        <div class="hero">
          <div class="content">
            {/* <h1>Welcome {user.username}</h1> */}
            <h1>Welcome {name}</h1>
            <h2>Get Health Buddy to help you take charge of your health.</h2>
          </div>
        </div>
      </section>
      <section id="middle">
        <p>
          Maintaining your health is a lifestyle and a lifelong process. But you don't have to do it alone and it doesn't have to be difficult. Let's get you Health Buddy that keeps track of your weekly progress and gives you what you need to be healthy. 
        </p>

          <p>Everyone is unique. Health Buddy can tailor to your health with recommended list of vitamins, minerals, macro nutrients and water.</p>
          <p>
            <div class="img-con"><img src={vitimg} alt="Vitamins" /><span class="centered">Vitamins</span></div>
            <div class="img-con"><img src={minimg} alt="Minerals" /><span class="centered">Minerals</span></div>
            <div class="img-con"><img src={macimg} alt="Macro Nutrients" /><span class="centered">Macro<br />Nutrients</span></div>
            <div class="img-con"><img src={watimg} alt="Water" /><span class="centered">Water</span></div>
          </p>


          <p >Whether you're active or sitting at desk all day, Health Buddy can balance your dietary need. You set your goal and Health Buddy will push you to your best health.</p>
          <p>
            <div class="img-con"><img src={sitimg} alt="Active" /><span class="centered">Active</span></div>
            <div class="img-con"><img src={runimg} alt="Goal" /><span class="centered">Goal</span></div>
            <div class="img-con"><img src={wlkimg} alt="Unique" /><span class="centered">Unique</span></div>
            <div class="img-con"><img src={grdimg} alt="Progress" /><span class="centered">Progress</span></div>
          </p>

          <p>Health Buddy works for all ages. Give it a try for your benefit. Take charge.</p>
          <p>
            <div class="img-con"><img src={kidimg} alt="Kids" /><span class="centered">Kids</span></div>
            <div class="img-con"><img src={teeimg} alt="Teens" /><span class="centered">Teens</span></div>
            <div class="img-con"><img src={momimg} alt="Adults" /><span class="centered">Adults</span></div>
            <div class="img-con"><img src={eldimg} alt="Elderly" /><span class="centered">Elderly</span></div>
          </p>
        </section>
        {/* <h3>
            Log In
        </h3>
        <form name="Login">

            <label>Username</label><input type="text" name="username" />
            <label>Password</label><input type="text" name="password" />
            <input type="submit" value="Log In" />

        </form> */}

      <NavMenu />
    </>
    
  )
};

export default Home;