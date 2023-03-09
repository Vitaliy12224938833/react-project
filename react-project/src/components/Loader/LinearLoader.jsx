import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
export const LinearLoadr = ({ loader }) => (
  <Box>
    {loader && (
      <LinearProgress
        sx={{
          position: 'fixed',
          height: '10px',
          bottom: '40px',
          zIndex: 999,
          width: '100%',
          maxWidth: '1600px',
        }}
      />
    )}
  </Box>
);
