import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function VesselCount() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
      <caption> <b>39</b> Vessels <b>39</b> Issues </caption>
        <TableHead>
        <TableRow hover sx={{ background: 'WhiteSmoke' }} >
            <TableCell>Actual Port</TableCell>
            <TableCell>Vessel</TableCell>
            <TableCell>Issue</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow hover>
              <TableCell align="Centerx ">Manzanillo,PA</TableCell>
              <TableCell align="Centerx ">25</TableCell>
              <TableCell align="Centerx ">3</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align="Centerx ">Santos,BR</TableCell>
              <TableCell align="Centerx ">10</TableCell>
              <TableCell align="Centerx "  sx={{color:'silver'}}>0</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align="Centerx ">Pecem,BR</TableCell>
              <TableCell align="Centerx ">3</TableCell>
              <TableCell align="Centerx "  sx={{color:'silver'}} >0</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align="Centerx ">Manaus,BR</TableCell>
              <TableCell align="Centerx ">1</TableCell>
              <TableCell align="Centerx "  sx={{color:'silver'}}>0</TableCell>
            </TableRow>

            
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}