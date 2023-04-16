import { Profile } from '../components/Profile/Profile';
import { Button, Box, styled, Paper } from '@mui/material';
import { useContext } from 'react';
import { UserDataContext } from '../Context/Context';

export const CreateProfilepage = () => {
  const userId = useContext(UserDataContext);
  const Wraper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '50px auto',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    minHeight: '100vh',
    textAlign: 'center',
  }));
  return (
    userId && (
      <Wraper>
        <Paper>
          <Profile />
        </Paper>
      </Wraper>
    )
  );
};
