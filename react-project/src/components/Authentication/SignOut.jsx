import React from 'react';
import { signOut } from '../../firebaseApi';
import { NavBarButton } from '../NavBar/commponents/NuvBarButton';

export const SignOut = () => {
  const handlerSignOut = () => {
    signOut();
    window.location.reload();
  };

  return <NavBarButton onClick={handlerSignOut}>Sign Out</NavBarButton>;
};
