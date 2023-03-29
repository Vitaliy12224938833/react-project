import { Typography, styled } from '@mui/material';

export const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));
