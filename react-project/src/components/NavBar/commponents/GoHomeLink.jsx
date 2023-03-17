import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
export const GoHomeLink = () => (
  <Link to={`/home`}>
    <Typography sx={{ color: 'black' }} textAlign='center'>
      Home
    </Typography>
  </Link>
);
