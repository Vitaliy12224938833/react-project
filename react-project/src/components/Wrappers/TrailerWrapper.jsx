import { Box, styled } from '@mui/material';

export const TrailerWrapper = styled(Box)(({ theme }) => ({
  marginTop: '3.3rem',
  [theme.breakpoints.down('sm')]: {
    arginTop: '3rem',
  },
}));
