import { Button, styled } from '@mui/material';
import React from 'react';
const ButtonStyle = styled(Button)(({ theme }) => ({
  my: 2,
  color: 'white',
  display: 'block',
  backgroundColor: 'primery',
}));
export const MenuButton = React.memo(({ children, onClick }) => (
  <ButtonStyle data-testid='menu-buttons' onClick={onClick}>
    {children}
  </ButtonStyle>
));
