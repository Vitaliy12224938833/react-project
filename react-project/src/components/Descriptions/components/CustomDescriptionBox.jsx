import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const CustomDescriptionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: 75,
  marginRight: theme.spacing(20),
  [theme.breakpoints.up('xs')]: {
    marginRight: 0,
    justifyContent: 'center',
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between',
    marginRight: 0,
    gap: 50,
  },
}));
