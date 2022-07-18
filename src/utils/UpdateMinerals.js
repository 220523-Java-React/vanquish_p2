import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicTable from "../components/BasicTable";
function MineralsAndVitamins(props) {
    
    if (props.age >= 71 && props.gender === 2) {
      return <p>
         vitaminA = 700;
            vitaminC = 75;
            vitaminD = 20;
            vitaminE = 15;
            vitaminK = 90;
            vitaminB1 = 1.1;
            vitaminB2 = 1.1;
            vitaminB3 = 14;
            vitaminB5 = 5;
            vitaminB7 = 30;
            vitaminB6 = 1.5;
            vitaminB12 = 2.4;
            vitaminB9 = 400;   
              choline = 425,
              magnesium = 420,
              calcium = 1200,
              zinc = 8,
              iron = 8,
              copper = 900,
              selenium = 55,
              manganese = 1.8,
              phosphorus = 700,
              potassium = 2600,
              iodine = 150,
              chromium = 20,
              molybdenum = 45,
              fluoride = 3,
              chloride = 1.8</p>;
              
 
              
    }
    if(props.age >= 71 && props.gender ===1){
      return <p>vitaminA = 700;
      vitaminC = 75;
      vitaminD = 20;
      vitaminE = 15;
      vitaminK = 90;
      vitaminB1 = 1.1;
      vitaminB2 = 1.1;
      vitaminB3 = 14;
      vitaminB5 = 5;
      vitaminB7 = 30;
      vitaminB6 = 1.5;
      vitaminB12 = 2.4;
      vitaminB9 = 400;
      choline = 425;
      magnesium = 420;
      calcium = 1200;
      zinc = 8;
      iron = 8;
      copper = 900;
      selenium = 55;
      manganese = 1.8;
      phosphorus = 700;
      potassium = 2600;
      iodine = 150;
      chromium = 20;
      molybdenum = 45;
      fluoride = 3;
      chloride = 1.8;</p>
    }
    if(props.age >= 51 && props.age <71 && props.gender ===2){
       return <p>  vitaminA = 700;
            vitaminC = 75;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 90;
            vitaminB1 = 1.1;
            vitaminB2 = 1.1;
            vitaminB3 = 14;
            vitaminB5 = 5;
            vitaminB7 = 30;
            vitaminB6 = 1.5;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 425;
            magnesium = 320;
            calcium = 1200;
            zinc = 8;
            iron = 8;
            copper = 900;
            selenium = 55;
            manganese = 1.8;
            phosphorus = 700;
            potassium = 2600;
            iodine = 150;
            chromium = 20;
            molybdenum = 45;
            fluoride = 3;
            chloride = 2;
            </p>
    }
    if (props.age >= 51 && props.age < 71 && props.gender === 1)
        {
            return <p>vitaminA = 900;
            vitaminC = 90;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 120;
            vitaminB1 = 1.2;
            vitaminB2 = 1.3;
            vitaminB3 = 16;
            vitaminB5 = 5;
            vitaminB7 = 30;
            vitaminB6 = 1.7;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 550;
            magnesium = 420;
            calcium = 1000;
            zinc = 11;
            iron = 8;
            copper = 900;
            selenium = 55;
            manganese = 2.3;
            phosphorus = 700;
            potassium = 3400;
            iodine = 150;
            chromium = 30;
            molybdenum = 45;
            fluoride = 4;
            chloride = 2;
            </p>
        }

        if (props.age >= 19 && props.age < 51 && props.gender === 2)
        {
           return <p>  vitaminA = 700;
            vitaminC = 75;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 90;
            vitaminB1 = 1.1;
            vitaminB2 = 1.1;
            vitaminB3 = 14;
            vitaminB5 = 5;
            vitaminB7 = 30;
            vitaminB6 = 1.3;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 425;
            magnesium = 320;
            calcium = 1000;
            zinc = 8;
            iron = 18;
            copper = 900;
            selenium = 55;
            manganese = 1.8;
            phosphorus = 700;
            potassium = 2600;
            iodine = 150;
            chromium = 25;
            molybdenum = 45;
            fluoride = 3;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 19 && props.age < 51 && props.gender === 1)
        {
            return <p> vitaminA = 900;
            vitaminC = 90;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 120;
            vitaminB1 = 1.2;
            vitaminB2 = 1.3;
            vitaminB3 = 16;
            vitaminB5 = 5;
            vitaminB7 = 30;
            vitaminB6 = 1.3;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 550;
            magnesium = 420;
            calcium = 1000;
            zinc = 11;
            iron = 8;
            copper = 900;
            selenium = 55;
            manganese = 2.3;
            phosphorus = 700;
            potassium = 3400;
            iodine = 150;
            chromium = 35;
            molybdenum = 45;
            fluoride = 4;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 14 && props.age < 19 && props.gender === 2)
        {
            return <p> vitaminA = 700;
            vitaminC = 65;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 75;
            vitaminB1 = 1;
            vitaminB2 = 1;
            vitaminB3 = 14;
            vitaminB5 = 5;
            vitaminB7 = 25;
            vitaminB6 = 1.2;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 400;
            magnesium = 360;
            calcium = 1300;
            zinc = 9;
            iron = 15;
            copper = 890;
            selenium = 55;
            manganese = 1.6;
            phosphorus = 1250;
            potassium = 2300;
            iodine = 150;
            chromium = 24;
            molybdenum = 43;
            fluoride = 3;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 14 && props.age < 19 && props.gender === 1)
        {
            return <p> vitaminA = 900;
            vitaminC = 75;
            vitaminD = 15;
            vitaminE = 15;
            vitaminK = 75;
            vitaminB1 = 1.2;
            vitaminB2 = 1.3;
            vitaminB3 = 16;
            vitaminB5 = 5;
            vitaminB7 = 25;
            vitaminB6 = 1.3;
            vitaminB12 = 2.4;
            vitaminB9 = 400;
            choline = 550;
            magnesium = 410;
            calcium = 1300;
            zinc = 11;
            iron = 11;
            copper = 890;
            selenium = 55;
            manganese = 2.2;
            phosphorus = 1250;
            potassium = 3000;
            iodine = 150;
            chromium = 35;
            molybdenum = 43;
            fluoride = 3;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 9 && props.age < 14 && props.gender === 2)
        {
          return <p>  vitaminA = 600;
            vitaminC = 45;
            vitaminD = 15;
            vitaminE = 11;
            vitaminK = 60;
            vitaminB1 = 0.9;
            vitaminB2 = 0.9;
            vitaminB3 = 12;
            vitaminB5 = 4;
            vitaminB7 = 20;
            vitaminB6 = 1;
            vitaminB12 = 1.8;
            vitaminB9 = 400;
            choline = 375;
            magnesium = 240;
            calcium = 1300;
            zinc = 8;
            iron = 8;
            copper = 700;
            selenium = 40;
            manganese = 1.6;
            phosphorus = 1250;
            potassium = 2300;
            iodine = 120;
            chromium = 21;
            molybdenum = 34;
            fluoride = 2;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 9 && props.age < 14 && props.gender === 1)
        {
            return <p> vitaminA = 600;
            vitaminC = 45;
            vitaminD = 15;
            vitaminE = 11;
            vitaminK = 60;
            vitaminB1 = 0.9;
            vitaminB2 = 0.9;
            vitaminB3 = 12;
            vitaminB5 = 4;
            vitaminB7 = 20;
            vitaminB6 = 1;
            vitaminB12 = 1.8;
            vitaminB9 = 400;
            choline = 375;
            magnesium = 240;
            calcium = 1300;
            zinc = 8;
            iron = 8;
            copper = 700;
            selenium = 40;
            manganese = 1.9;
            phosphorus = 1250;
            potassium = 2500;
            iodine = 120;
            chromium = 25;
            molybdenum = 34;
            fluoride = 2;
            chloride = 2.3;
            </p>
        }
        if (props.age >= 4 && props.age < 9)
        {
            return <p> vitaminA = 400;
            vitaminC = 25;
            vitaminD = 15;
            vitaminE = 7;
            vitaminK = 55;
            vitaminB1 = 0.6;
            vitaminB2 = 0.6;
            vitaminB3 = 8;
            vitaminB5 = 3;
            vitaminB7 = 12;
            vitaminB6 = 0.6;
            vitaminB12 = 1.2;
            vitaminB9 = 200;
            choline = 250;
            magnesium = 130;
            calcium = 1000;
            zinc = 5;
            iron = 10;
            copper = 440;
            selenium = 30;
            manganese = 1.5;
            phosphorus = 500;
            potassium = 2300;
            iodine = 90;
            chromium = 15;
            molybdenum = 22;
            fluoride = 1.1;
            chloride = 1.9;
            </p>
        }
        if (props.age >= 1 && props.age < 4)
        {
          return <p>  vitaminA = 300;
            vitaminC = 15;
            vitaminD = 15;
            vitaminE = 6;
            vitaminK = 30;
            vitaminB1 = 0.5;
            vitaminB2 = 0.5;
            vitaminB3 = 6;
            vitaminB5 = 2;
            vitaminB7 = 8;
            vitaminB6 = 0.5;
            vitaminB12 = 0.9;
            vitaminB9 = 150;
            choline = 200;
            magnesium = 80;
            calcium = 700;
            zinc = 3;
            iron = 7;
            copper = 340;
            selenium = 20;
            manganese = 1.2;
            phosphorus = 460;
            potassium = 2000;
            iodine = 90;
            chromium = 11;
            molybdenum = 17;
            fluoride = 0.6;
            chloride = 1.5;
            </p> 
        }
        if (props.age >= 0.5 && props.age < 1)
        {
          return <p>  vitaminA = 500;
            vitaminC = 50;
            vitaminD = 10;
            vitaminE = 5;
            vitaminK = 2.5;
            vitaminB1 = 0.3;
            vitaminB2 = 0.4;
            vitaminB3 = 4;
            vitaminB5 = 1.8;
            vitaminB7 = 6;
            vitaminB6 = 0.3;
            vitaminB12 = 0.5;
            vitaminB9 = 80;
            choline = 150;
            magnesium = 75;
            calcium = 260;
            zinc = 3;
            iron = 11;
            copper = 200;
            selenium = 15;
            manganese = 0.003;
            phosphorus = 275;
            potassium = 860;
            iodine = 130;
            chromium = 5.5;
            molybdenum = 3;
            fluoride = 0.5;
            chloride = 1.5;
            </p> 
        }
        if (props.age < 0.5)
        {
          return <p>  vitaminA = 400;
            vitaminC = 40;
            vitaminD = 10;
            vitaminE = 4;
            vitaminK = 2;
            vitaminB1 = 0.2;
            vitaminB2 = 0.3;
            vitaminB3 = 2;
            vitaminB5 = 1.7;
            vitaminB7 = 5;
            vitaminB6 = 0.1;
            vitaminB12 = 0.4;
            vitaminB9 = 65;
            choline = 125;
            magnesium = 30;
            calcium = 200;
            zinc = 2;
            iron = 0.27;
            copper = 200;
            selenium = 20;
            manganese = 0.6;
            phosphorus = 100;
            potassium = 400;
            iodine = 110;
            chromium = 0.2;
            molybdenum = 2;
            fluoride = 0.01;
            chloride = 1.5;
            </p> 
        }


    
  }
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeTwo = this.handleChangeTwo.bind(this);
      this.state = {age: ''};
      this.state ={gender: ''};
    }
  
    handleChange(e) {
      this.setState({age: e.target.value});
    }
    
      handleChangeTwo(f) {
      this.setState({gender: f.target.value});
    }
  
    render() {
      const age = this.state.age;
      const gender = this.state.gender;
      return (
        <fieldset>
          <h3>Enter your age and gender to get your daily recommendations</h3><br></br>
          <h4 >Age<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Gender</h4>
          
          
          
          <input
            value={age}
            onChange={this.handleChange} />
          <input
            value={gender}
            onChange={this.handleChangeTwo} />
          
        
          <MineralsAndVitamins
            age={parseFloat(age)}
            gender={parseFloat(gender)}
            />
            
        </fieldset>
      );
    }
  }

  
  export default Calculator;
  
 