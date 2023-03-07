import { LinearProgress } from '@mui/material';

export const LinearLoadr = ({ loader }) => (
  <div className='loader'>
    {loader && (
      <LinearProgress
        sx={{
          position: 'fixed',
          height: '10px',
          bottom: '40px',
          zIndex: 999,
          width: '100%',
          maxWidth: '1600px',
        }}
      />
    )}
  </div>
);
