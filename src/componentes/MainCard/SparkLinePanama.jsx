import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function PanammaChart() {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
      colors={['red']}
          data={[14, 13, 13, 12, 11, 10, 9, 8]}
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