import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const StillImageWrapper = styled(Box)(({ theme }) => ({
  minWidth: 200,
  margin: theme.spacing(3),
  maxHeight: 300,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minWidth: 'unset',
    maxHeight: 'none',
    margin: theme.spacing(1.5, 3),
  },
}));
