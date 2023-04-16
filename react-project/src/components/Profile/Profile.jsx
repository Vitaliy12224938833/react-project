import React, { useState } from 'react';
import { useContext } from 'react';
import dayjs from 'dayjs';
import { UserDataContext } from '../../Context/Context';
import {
  styled,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  readFromFirestore,
  setFirestoreData,
  updateFirestoreData,
} from '../../firebaseApi';

const ProfileWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#f7f7f7',
});

const ProfileForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const ProfileField = styled(TextField)({
  marginBottom: '16px',
});

const ProfileButton = styled(Button)({
  marginTop: '16px',
});
const data = {
  avatar: '',
  name: '',
  birthdate: '',
  gender: '',
};
export const Profile = React.memo(({ setOpen }) => {
  const userId = useContext(UserDataContext);
  const [personData, setPersonData] = useState(data);
  const [isSave, setIsSave] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const heandleChange = (e, key) => {
    setPersonData({ ...personData, [key]: e.target.value });
  };

  const heandleChangeDate = (newDate, key) => {
    const transfomrDate = (d) => `${d.$y}-${d.$M + 1}-${d.$D}`;
    console.log(transfomrDate(newDate));
    setPersonData({ ...personData, [key]: transfomrDate(newDate) });
  };

  const save = () => {
    if (isNewUser) {
      setFirestoreData({ userId, personData });
    } else {
      updateFirestoreData({ userId, personData });
    }
    setOpen(false);
    setIsSave(true);
  };

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        if (userData === undefined) {
          setIsNewUser(true);
          return;
        }
        setPersonData(userData);
      })();
    }
    setIsSave(false);
  }, [isSave]);

  return (
    <ProfileWrapper>
      <Typography variant='h5'>{personData.name}</Typography>
      <ProfileForm>
        <ProfileField
          label='Name'
          value={personData.name}
          onChange={(e) => heandleChange(e, 'name')}
          required
        />
        <FormControl component='fieldset'>
          <FormLabel component='legend'>Gender</FormLabel>
          <RadioGroup
            aria-label='gender'
            name='gender'
            value={personData.gender}
            onChange={(e) => heandleChange(e, 'gender')}
          >
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
          </RadioGroup>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {personData.birthdate ? (
            <DatePicker
              label='Birthdate'
              value={dayjs(personData.birthdate)}
              onChange={(newDate) => heandleChangeDate(newDate, 'birthdate')}
            />
          ) : (
            <DatePicker
              label='Birthdate'
              onChange={(newDate) => heandleChangeDate(newDate, 'birthdate')}
            />
          )}
        </LocalizationProvider>

        <ProfileField
          label='Description'
          value={personData.description}
          onChange={(e) => heandleChange(e, 'description')}
          multiline
          rows={4}
        />

        <ProfileButton
          component={Link}
          to={'/home'}
          onClick={save}
          variant='contained'
        >
          Save
        </ProfileButton>
      </ProfileForm>
    </ProfileWrapper>
  );
});
