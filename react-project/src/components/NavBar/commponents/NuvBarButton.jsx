import { Button, styled } from '@mui/material';
import React from 'react';
const ButtonStyle = styled(Button)(({ theme }) => ({
  my: 2,
  color: 'white',
  display: 'block',
  backgroundColor: 'primery',
}));
export const NavBarButton = React.memo(({ children, onClick }) => (
  <ButtonStyle variant='contained' onClick={onClick}>
    {children}
  </ButtonStyle>
));
