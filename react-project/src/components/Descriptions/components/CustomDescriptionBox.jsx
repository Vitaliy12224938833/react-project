import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const CustomDescriptionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 75,
  marginRight: theme.spacing(20),
  [theme.breakpoints.up('md')]: {
    marginRight: 0,
    justifyContent: 'center',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: 0,
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    gap: 50,
  },
}));
