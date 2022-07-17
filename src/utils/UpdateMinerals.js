import React from "react";
function MineralsAndVitamins(props) {
    if (props.age >= 71 && props.gender === 2) {
      return <p>   vitaminA = 700;
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
              chloride = 1.8;</p>;
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
          <legend>Enter Age and Gender:</legend>
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
  
 