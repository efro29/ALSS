import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NearMeIcon from '@mui/icons-material/NearMe';




export default function VesselTracking() {
  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 10 }} size="small"  aria-label="a dense table">
        <TableHead>
          <TableRow hover sx={{ background: 'WhiteSmoke'}} >
            <TableCell>From</TableCell>
            <TableCell>Vessel Name</TableCell>
            <TableCell>Days</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow hover  >
              <TableCell align="left" fontcolor="red" sx={{width:10}}>PAMIT</TableCell>

              <TableCell align="left" sx={{width:250, fontSize:12}}>
                 <NearMeIcon sx={{fontSize:15, mr:1,color:'lime'}}/>
                FERNAO DE MAGALHAES
                </TableCell>
              <TableCell align="Center">12</TableCell>
            </TableRow>
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="left" sx={{width:250, fontSize:12}}>
                <NearMeIcon sx={{fontSize:15, mr:1,color:'lime'}}/>
                PIGMEU ALBERTO
                </TableCell>
              <TableCell align="Center">13</TableCell>
            </TableRow>
    
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="left" sx={{width:250, fontSize:12}}>
                 <NearMeIcon sx={{fontSize:15, mr:1,color:'lime'}}/>
                FERNANDO NOIA
                </TableCell>
              <TableCell align="Center">21</TableCell>
            </TableRow>
    
            <TableRow hover  >
              <TableCell align="Center" fontcolor="red">PAMIT</TableCell>
              <TableCell align="left" sx={{width:250, fontSize:12}}>
                 <NearMeIcon sx={{fontSize:15, mr:1,color:'lime'}}/>
                ATACAMA MAERSK
                </TableCell>
              <TableCell align="Center">22</TableCell>
            </TableRow>
    
    
        </TableBody>
      </Table>
    </TableContainer>
  );
}