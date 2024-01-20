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
              <TableCell>Manzanillo,PA</TableCell>
              <TableCell>25</TableCell>
              <TableCell>3</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell>Santos,BR</TableCell>
              <TableCell>10</TableCell>
              <TableCell  sx={{color:'silver'}}>0</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell>Pecem,BR</TableCell>
              <TableCell>3</TableCell>
              <TableCell  sx={{color:'silver'}} >0</TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell>Manaus,BR</TableCell>
              <TableCell>1</TableCell>
              <TableCell  sx={{color:'silver'}}>0</TableCell>
            </TableRow>

            
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}