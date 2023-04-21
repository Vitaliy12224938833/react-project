import { UserDataContext } from '../../Context/Context';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  styled,
  Paper,
  IconButton,
} from '@mui/material';

import { Profile } from './Profile';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { PersonalInfo } from './PersonalInfo';
import { Box } from '@mui/system';
import { Edit } from '@mui/icons-material';
import { readFromFirestore } from '../../firebaseApi';

const ProfilePageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 50px 50px 50px',
  marginBottom: '30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
  },
}));

const ProfilDialogWithoutDataWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  margin: '100px ',
  justifyContent: 'center',
  paddingBottom: '32px',
}));

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: '50px',
  textAlign: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
}));

export const ProfileDialog = () => {
  const userId = useContext(UserDataContext);
  const [open, setOpen] = useState(false);
  const [personData, setPersonData] = useState(null);
  const [isReadData, setIsReadData] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        setPersonData(userData);
        setIsReadData(true);
      })();
    }
  }, [open || userId]);

  return userId && personData ? (
    <ProfilePageWrapper>
      <Box>
        <PersonalInfo open={open}>
          <StyledIconButton onClick={handleClickOpen}>
            <Edit />
          </StyledIconButton>
        </PersonalInfo>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Profile setOpen={setOpen} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </ProfilePageWrapper>
  ) : isReadData ? (
    <ProfilDialogWithoutDataWrapper>
      <PaperStyled>
        <Typography>Please fill out the personal data </Typography>
        <Link to={'/create-profile'}>
          <Button sx={{ marginTop: '1rem' }} variant='outlined'>
            create profile
          </Button>
        </Link>
      </PaperStyled>
    </ProfilDialogWithoutDataWrapper>
  ) : (
    <Loader />
  );
};
