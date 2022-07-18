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
  
 