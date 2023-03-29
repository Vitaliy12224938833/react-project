import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { NavBarButton } from './NuvBarButton';
import TextField from '@mui/material/TextField';
import { BasicModal } from '../../common/BasicModal';
import axios from 'axios';
import { API_KEY } from '../../../data';

const defaultInputValues = {
  username: '',
  password: '',
  request_token: 'f892e7bf3817c8d34153f61ea6896a8530c949da',
};

export const AuthenticationModal = () => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(defaultInputValues);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modalStyles = {
    inputFields: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
      marginBottom: '15px',
      '.MuiFormControl-root': {
        marginBottom: '20px',
      },
    },
  };

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
    <Box sx={modalStyles.inputFields}>
      <TextField
        placeholder='Name'
        name='name'
        label='Name'
        value={values.username}
        required
        onChange={(e) => handleChange(e, 'username')}
      />
      <TextField
        placeholder='Password'
        name='password'
        label='Password'
        type='password'
        required
        value={values.password}
        onChange={(e) => handleChange(e, 'password')}
      />
    </Box>
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
