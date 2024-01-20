import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function NewsCount() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 20 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow hover sx={{ background: 'WhiteSmoke' }} >
            <TableCell>Category</TableCell>
            <TableCell>News</TableCell>
            <TableCell>Historic</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow hover>
              <TableCell align="Centerx ">Health</TableCell>
              <TableCell align="Centerx ">0</TableCell>
              <TableCell align="Centerx ">0</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="Centerx ">Weather</TableCell>
              <TableCell align="Centerx ">0</TableCell>
              <TableCell align="Centerx ">0</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="Centerx ">Strike</TableCell>
              <TableCell align="Centerx ">0</TableCell>
              <TableCell align="Centerx ">0</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="Centerx ">War</TableCell>
              <TableCell align="Centerx ">0</TableCell>
              <TableCell align="Centerx ">0</TableCell>
            </TableRow>


        </TableBody>
      </Table>
    </TableContainer>
  );
}