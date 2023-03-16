import { useContext } from 'react';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { DataContext } from '../../../Context/Context';

export const Overview = () => {
  const [{ overview }] = useContext(DataContext);
  return (
    <Paper
      sx={{
        padding: 3,
        margin: 2,
        width: '100%',
      }}
    >
      <Typography>{overview}</Typography>
    </Paper>
  );
};
