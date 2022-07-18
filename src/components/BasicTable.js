import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Calculator from '../utils/UpdateMinerals';

function createDataMineral(age, gender) {
  // if(age < 2 && gender == 1){
    var choline = 400;
  // }
  return {choline};
}

const rows = [createDataMineral(createDataMineral.choline)];

 

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Choline</TableCell>
            <TableCell align="right">Magnesium</TableCell>
            <TableCell align="right">Calcium</TableCell>
            <TableCell align="right">Zinc</TableCell>
            <TableCell align="right">Copper</TableCell>
            <TableCell align="right">Selenium</TableCell>
            <TableCell align="right">Manganese</TableCell>
            <TableCell align="right">Phosphorus</TableCell>
            
            <TableCell align="right">Potassium</TableCell>
            <TableCell align="right">Iodine</TableCell>
            <TableCell align="right">Chromium</TableCell>
            <TableCell align="right">Molhybdenum</TableCell>
            <TableCell align="right">Fluoride</TableCell>
            <TableCell align="right">Sodium Chloride</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.choline}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.choline}
              </TableCell>
              
              <TableCell align="right">{row.choline}</TableCell>
              <TableCell align="right">{row.choline}</TableCell>
              <TableCell align="right">{row.choline}</TableCell>
              <TableCell align="right">{row.choline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}