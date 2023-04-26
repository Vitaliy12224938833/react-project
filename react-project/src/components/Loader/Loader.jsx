import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export const Loader = () => (
  <Box
    data-testid='loader'
    sx={{ display: 'flex', width: '100%', height: '100vh' }}
  >
    <Box
      sx={{
        display: 'flex',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <CircularProgress size={150} />
    </Box>
  </Box>
);
