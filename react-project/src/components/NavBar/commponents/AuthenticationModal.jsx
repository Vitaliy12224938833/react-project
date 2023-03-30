import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled, Box, TextField } from '@mui/material';
import { NavBarButton } from './NuvBarButton';
import { BasicModal } from '../../common/BasicModal';
import { API_KEY } from '../../../data';

const defaultInputValues = {
  username: '',
  password: '',
  request_token: 'f892e7bf3817c8d34153f61ea6896a8530c949da',
};

const InputFieldsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',

  flexDirection: 'column',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  '& .MuiFormControl-root': {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
      padding: 0,
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
    [theme.breakpoints.down('md')]: {
      height: '25px', // height for small screens
    },
    [theme.breakpoints.down('sm')]: {
      height: '15px', // height for extra-small screens
    },
  },
  '& *': {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7rem',
    },
  },
}));

//MuiInputBase-input MuiOutlinedInput-input css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input
export const AuthenticationModal = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(defaultInputValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      )
      .then((res) => values)
      .then((res) => {
        console.log(res);
        axios
          .post(
            `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`,
            res
          )
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      });
  };

  const handleChange = (event, key) => {
    setValues({ ...values, [key]: event.target.value });
  };

  useEffect(() => {
    if (open) setValues(defaultInputValues);
  }, [open]);

  const getContent = () => (
    <InputFieldsContainer>
      <StyledTextField
        sx={{}}
        placeholder='Name'
        name='name'
        label='Name'
        value={values.username}
        required
        onChange={(e) => handleChange(e, 'username')}
      />
      <StyledTextField
        placeholder='Password'
        name='password'
        label='Password'
        type='password'
        required
        value={values.password}
        onChange={(e) => handleChange(e, 'password')}
      />
    </InputFieldsContainer>
  );

  return (
    <>
      <NavBarButton onClick={handleOpen}>Login</NavBarButton>
      <BasicModal
        open={open}
        onClose={handleClose}
        title='New user'
        subTitle="Fill out inputs and hit 'submit' button."
        content={getContent()}
        onSubmit={handleSubmit}
      />
    </>
  );
};
