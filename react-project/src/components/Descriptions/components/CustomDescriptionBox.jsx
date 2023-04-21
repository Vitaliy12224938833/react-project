import { Box } from '@mui/system';
import { styled } from '@mui/material';

export const CustomDescriptionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: 75,
  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    gap: 25,
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'space-between',
    gap: 50,
  },
}));
