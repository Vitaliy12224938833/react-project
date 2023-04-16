import { Box, styled } from '@mui/material';

export const TrailerWrapper = styled(Box)(({ theme }) => ({
  marginTop: '2.6rem',
  [theme.breakpoints.down('md')]: {
    arginTop: '3rem',
  },
}));
