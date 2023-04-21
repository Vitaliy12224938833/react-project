import { styled } from '@mui/material';
import { Typography } from '@mui/material';

export const SymmeryTitel = styled(Typography)(({ theme }) => ({
  width: '33%',
  flexShrink: 0,
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '60%',
    marginBottom: theme.spacing(0.5),
    fontSize: '0.6rem',
  },
}));
