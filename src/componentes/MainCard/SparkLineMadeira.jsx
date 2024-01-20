import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function MadeiraChart() {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
      colors={['blue']}
          data={[13, 13.8, 13.9, 14, 14.5, 14.6, 14.9, 15]}
          xAxis={{
            scaleType: 'time',
            data: [
              new Date(2022, 5, 1),
              new Date(2022, 5, 2),
              new Date(2022, 5, 5),
              new Date(2022, 5, 6),
              new Date(2022, 5, 7),
              new Date(2022, 5, 8),
              new Date(2022, 5, 11),
              new Date(2022, 5, 12),
            ],
            valueFormatter: (value) => value.toISOString().slice(0, 10),
          }}
          height={30}
          showTooltip
          showHighlight
        />
      </Box>
      
    </Stack>
  );
}