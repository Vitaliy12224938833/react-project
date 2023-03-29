import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const DetailsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
