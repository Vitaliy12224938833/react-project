import { Typography } from '@mui/material';
import { styled } from '@mui/material';

export const ReleaseDate = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginRight: theme.spacing(1),
  alignItems: 'center',
  textAlign: 'right',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginBottom: theme.spacing(0.5),
    fontSize: '10px',
  },
}));
