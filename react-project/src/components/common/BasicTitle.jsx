import { Typography, styled } from '@mui/material';
export const BasicTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  marginBottom: theme.spacing('0.5rem'),
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing('0.2rem'),
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing('0.1rem'),
  },
}));
