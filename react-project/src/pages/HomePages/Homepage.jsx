import React, { useContext, useState } from 'react';

import { Typography, Paper, styled } from '@mui/material';
import { Box } from '@mui/system';
import { SignIn } from '../../components/Authentication/SignIn';
import { SignUp } from '../../components/Authentication/SignUp';
import { ProfileDialog } from '../../components/Profile/ProfilDialog';
import { UserDataContext } from '../../Context/Context';
import { Loader } from '../../components/Loader/Loader';
import { UserSavedMediaList } from '../../components/SavedList/UserSavedMediaList';

const BoxStyled = styled(Box)(({ theme }) => ({
  margin: '25% auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '1rem',
  textAlign: 'center',
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '10%',
}));

const HomePageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '100px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

export const Homepage = React.memo(({}) => {
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);
  const userId = useContext(UserDataContext);

  return !!userId ? (
    <HomePageWrapper>
      <ProfileDialog />
      <UserSavedMediaList />
    </HomePageWrapper>
  ) : load ? (
    <Loader />
  ) : (
    <BoxStyled>
      <PaperStyled>
        <Typography>
          Select an account to log in with or add a new one.
        </Typography>
        <ButtonBox>
          <SignIn />
          <SignUp />
        </ButtonBox>
      </PaperStyled>
    </BoxStyled>
  );
});
