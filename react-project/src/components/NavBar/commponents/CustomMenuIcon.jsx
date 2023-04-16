import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

export const CustomMenuIcon = React.memo(({ openMenu, closeMenu, state }) => (
  <IconButton
    size='large'
    aria-label='account of current user'
    aria-controls='menu-appbar'
    aria-haspopup='true'
    onClick={state ? closeMenu : openMenu}
    color='inherit'
  >
    <MenuIcon />
  </IconButton>
));
