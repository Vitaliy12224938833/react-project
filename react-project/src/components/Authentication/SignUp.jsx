import React, { useState } from 'react';

import { BasicModal } from '../common/BasicModal';
import { NavBarButton } from '../NavBar/commponents/NuvBarButton';
import { EmailAndPasswordFields } from './components/EmailAndPasswordFields';
import { signUp } from '../../firebaseApi';

export const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isUserExist, setIsUserExist] = useState(false);

  const handlerOpen = () => setOpen(true);
  const handlerClose = () => setOpen(false);

  const handlerEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!event.target.validity.valid);
  };

  const handlerPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(!event.target.validity.valid);
  };

  const handlerSignUp = (e) => {
    e.preventDefault();
    (async () => {
      const { success } = await signUp({ email, password });
      if (success) {
        setOpen(false);
        setIsUserExist(false);
        window.location.reload();
      } else if (!success) {
        setIsUserExist(true);
      }
    })();
  };

  return (
    <>
      <NavBarButton onClick={handlerOpen}>Sign Up</NavBarButton>
      <BasicModal
        isUserExist={isUserExist}
        open={open}
        onClose={handlerClose}
        title='New user'
        subTitle="Fill out inputs and hit 'submit' button."
        onSubmit={handlerSignUp}
        content={EmailAndPasswordFields(
          email,
          password,
          handlerEmailChange,
          handlerPasswordChange,
          emailError,
          passwordError
        )}
      />
    </>
  );
};
