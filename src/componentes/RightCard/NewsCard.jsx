import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CardNews() {
  return (


    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>   <NewReleasesIcon sx={{color:'gray', mr:1}}/>
       War
        <Stack spacing={2}>
        <Pagination count={2} shape="rounded" />
        </Stack>
      </CardActions>

      
      <hr />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>   <LocalHospitalIcon sx={{color:'gray', mr:1}}/> Health
      <Stack spacing={2}>
        <Pagination count={2} shape="rounded" />
        </Stack>
      </CardActions>
      <hr />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>   <Diversity3Icon sx={{color:'gray', mr:1}}/> Strike
      <Stack spacing={2}>
        <Pagination count={2} shape="rounded" />
        </Stack>
      </CardActions>
      
      <hr />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>   <ThunderstormIcon sx={{color:'gray', mr:1}}/> Weather
      <Stack spacing={2}>
        <Pagination count={4} shape="rounded" />
        </Stack> 
      </CardActions>
      


    </Card>





  );
}