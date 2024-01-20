import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function VesselTracking() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 10 }} size="small"  aria-label="a dense table">
        <TableHead>
          <TableRow hover sx={{ background: 'WhiteSmoke'}} >
            <TableCell>From</TableCell>
            <TableCell>Vessel Name</TableCell>
            <TableCell>ETA</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="Center">FERNAO DE MAGALHAES</TableCell>
              <TableCell align="Center">12-01</TableCell>
            </TableRow>
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="Center">PIGMEU ALBERTO</TableCell>
              <TableCell align="Center">12-01</TableCell>
            </TableRow>
    
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="Center">FERNANDO NOIA</TableCell>
              <TableCell align="Center">12-01</TableCell>
            </TableRow>
    
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="Center">ATACAMA MAERSK</TableCell>
              <TableCell align="Center">12-01</TableCell>
            </TableRow>
    
    
        </TableBody>
      </Table>
    </TableContainer>
  );
}