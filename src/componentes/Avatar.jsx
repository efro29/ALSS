import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={3}>
        <Typography variant='subtitle1' color='white'>
                Elton Felipe
        </Typography>
    
      <Avatar alt="Remy Sharp" src="/avatar.png" />
      
    </Stack>
  );
}