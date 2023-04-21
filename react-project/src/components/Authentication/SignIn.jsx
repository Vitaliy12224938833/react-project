import React, { useState } from 'react';
import { NavBarButton } from '../NavBar/commponents/NuvBarButton';
import { BasicModal } from '../common/BasicModal';
import { EmailAndPasswordFields } from './components/EmailAndPasswordFields';
import { signIn } from '../../firebaseApi';

export const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  const handlerSignIn = (e) => {
    e.preventDefault();
    (async () => {
      const { operationType } = await signIn({ email, password });
      if (operationType === 'signIn') {
        setOpen(false);
        window.location.reload();
      }
    })();
  };

  return (
    <>
      <NavBarButton onClick={handlerOpen}>Sign In</NavBarButton>
      <BasicModal
        open={open}
        onClose={handlerClose}
        title='New user'
        subTitle="Fill out inputs and hit 'submit' button."
        onSubmit={handlerSignIn}
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
