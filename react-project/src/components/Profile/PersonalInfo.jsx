import React, { useContext, useState, useEffect } from 'react';
import { Box, Typography, Avatar, styled } from '@mui/material';
import { UserDataContext } from '../../Context/Context';

import { readFromFirestore, saveImageToStorage } from '../../firebaseApi';

const AvatarStyled = styled(Avatar)(({ theme }) => ({
  width: '200px',
  height: '200px',
  [theme.breakpoints.down('md')]: {
    width: '150px',
    height: '150px',
  },
}));

const PersonalInfoWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'row',
  },
}));

const AvatarWrapper = styled(Box)(({ theme }) => ({}));
const InfoWrapper = styled(Box)(({ theme }) => ({
  marginLeft: '2rem',
  width: '300px',
}));

export const PersonalInfo = React.memo(({ open, children }) => {
  const userId = useContext(UserDataContext);
  const [personData, setPersonData] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        setPersonData(userData);
        setIsUpdate(false);
      })();
    }
  }, [userId, open, isUpdate]);

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    saveImageToStorage({ userId, file });
  };

  return (
    personData && (
      <PersonalInfoWrapper>
        <AvatarWrapper>
          <label
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            htmlFor='avatar-upload'
          >
            {/* <CircularProgress
              sx={{
                position: 'absolute',
                zIndex: '2',
              }}
              variant='determinate'
              value={progresspercent}
            /> */}

            <AvatarStyled alt='Avatar' src={personData.avatar} />
          </label>
          <input
            id='avatar-upload'
            type='file'
            onChange={handleAvatarUpload}
            style={{ display: 'none' }}
          />
        </AvatarWrapper>
        <InfoWrapper>
          {children}
          <Typography variant='h5' gutterBottom>
            {personData.name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            Gender: {personData.gender}
          </Typography>
          <Typography variant='subtitle1'>
            Birthdate: {personData.birthdate}
          </Typography>
        </InfoWrapper>
      </PersonalInfoWrapper>
    )
  );
});
