import { LinearProgress } from '@mui/material';

export const LinearLoadr = ({ loader }) => (
  <div className='loader'>{loader && <LinearProgress color='primary' />}</div>
);
