import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

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
              <TableCell align="left">
                <LocalHospitalIcon fontSize='10' sx={{color:'gray', mr:1}}/>
                Health
                </TableCell>
              <TableCell align="center">35</TableCell>
              <TableCell align="center">2</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="left">
              <ThunderstormIcon fontSize='10' sx={{color:'gray', mr:1}}/>
                Weather
                </TableCell>
              <TableCell align="center">15</TableCell>
              <TableCell align="center" sx={{color:'silver'}}>0</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="left">
              <Diversity3Icon fontSize='10' sx={{color:'gray', mr:1}}/>
                Strike
                </TableCell>
              <TableCell align="center">25</TableCell>
              <TableCell align="center" sx={{color:'silver'}}>0</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell align="left">
              <NewReleasesIcon fontSize='10' sx={{color:'gray', mr:1}}/>
                War
                </TableCell>
              <TableCell align="center" >123</TableCell>
              <TableCell align="center">33</TableCell>
            </TableRow>


        </TableBody>
      </Table>
    </TableContainer>
  );
}