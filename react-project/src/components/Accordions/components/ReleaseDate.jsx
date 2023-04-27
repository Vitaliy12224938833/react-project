import { Typography } from '@mui/material';
import { styled } from '@mui/material';

export const ReleaseDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  alignItems: 'center',
  textAlign: 'right',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(0.5),
    fontSize: '10px',
  },
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(0.5),
    fontSize: '10px',
  },
}));
