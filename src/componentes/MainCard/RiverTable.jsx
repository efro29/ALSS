import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AmazonasChart from './SparkLineAmazonas';
import PanammaChart from './SparkLinePanama';
import MadeiraChart from './SparkLineMadeira';


export default function RiverResult() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
        <TableRow hover sx={{ background: 'WhiteSmoke' }} >
            <TableCell align="center" >River</TableCell>
            <TableCell align="center" >Height</TableCell>
            <TableCell align="center" colSpan={2}>Average 6 Days</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow hover>
              <TableCell align="center" width={300}>Gatun Lake</TableCell>
              <TableCell align="center" width={150}>24.80 m</TableCell>
              <TableCell align="center" width={250} sx={{color:'red'}}>-0.60 cm</TableCell>
              <TableCell align="center" width={600}>
                  <PanammaChart />
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align="center" width={300}>Rio Madeira</TableCell>
              <TableCell align="center" width={150}>14.74 m</TableCell>
              <TableCell align="right" width={250} sx={{color:'blue'}}>1.60 cm</TableCell>
              <TableCell align="left" width={600}>
                  <MadeiraChart />
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align="center" width={300}>Rio Negro</TableCell>
              <TableCell align="center" width={150}>14.74 m</TableCell>
              <TableCell align="right" width={250} sx={{color:'blue'}}>1.60 cm</TableCell>
              <TableCell align="left" width={600}>
                  <AmazonasChart />
              </TableCell>
            </TableRow>

          
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}