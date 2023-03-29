import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const ComponentWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing('5rem'),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing('2.5rem'),
  },
}));
