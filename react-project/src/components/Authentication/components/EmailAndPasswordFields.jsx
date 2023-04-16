import { styled, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: 'red',
  marginTop: theme.spacing(1),
}));

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
  '& input:valid + fieldset': {
    borderColor: 'green',
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
  },
  '& input:valid:focus + fieldset': {
    borderWidth: 2,
  },
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
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6rem',
    },
  },
}));

export const EmailAndPasswordFields = (
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  emailError,
  passwordError
) => (
  <InputFieldsContainer>
    <StyledTextField
      placeholder='Email'
      name='email'
      type='email'
      value={email}
      required
      onChange={handleEmailChange}
    />
    {emailError && <ErrorMessage>Email should be valid</ErrorMessage>}
    <StyledTextField
      placeholder='Password'
      name='password'
      type='password'
      value={password}
      required
      minLength={6}
      onChange={handlePasswordChange}
    />
    {passwordError && (
      <ErrorMessage>Password should be at least 6 characters long</ErrorMessage>
    )}
  </InputFieldsContainer>
);
