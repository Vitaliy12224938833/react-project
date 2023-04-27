import { Menu } from '@mui/material';
import React from 'react';

export const NavBarMenu = React.memo(({ menu, closeMenu, children, style }) => (
  <Menu
    data-testid='nav-bar-menu'
    id='menu-appbar'
    anchorEl={menu}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
      closeMenu,
    }}
    open={Boolean(menu)}
    onClose={closeMenu}
    sx={style}
  >
    {children}
  </Menu>
));
