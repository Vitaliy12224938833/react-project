import { Menu } from '@mui/material';

export const NavBarMenu = ({ menu, closeMenu, children, style }) => (
  <Menu
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
);
