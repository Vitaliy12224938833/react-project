import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarButton } from './NuvBarButton';
export const GoHomeLink = () => (
  <Link to={`/home`}>
    <NavBarButton sx={{ color: 'black' }}>Home</NavBarButton>
  </Link>
);
