import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import VesselCount from './LeftCard/VesselCount';
import VesselTracking from './LeftCard/VesselTracking';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import NewsCount from './RightCard/NewsCount';
import CardNews from './RightCard/NewsCard';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>


         <Grid item xs={2}>
          <Item className='cards'>
          <Typography variant="h6" gutterBottom>
            <ModeOfTravelIcon></ModeOfTravelIcon> 
            &nbsp;  Vessel Information
          </Typography>
          <hr />
         <VesselCount/>
         <br />
         <VesselTracking/>
          </Item>
        </Grid>




        <Grid item xs={8}>
          <Item className='cards'>


            Mapa do Mundo
              
          </Item>
        </Grid>



        <Grid item xs={2}>
          <Item className='cards'>
          <Typography variant="h6" gutterBottom>
            <NewspaperIcon></NewspaperIcon> 
             &nbsp; News Monitoring
          </Typography><hr />
          
          <NewsCount></NewsCount>
          <br />
          <Typography variant="h6" gutterBottom>
            <NewspaperIcon></NewspaperIcon> 
             &nbsp; Last News January 19,2024
          </Typography><hr />
          <CardNews></CardNews>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}




