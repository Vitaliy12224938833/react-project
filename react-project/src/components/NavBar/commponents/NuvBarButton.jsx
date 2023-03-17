import { Button } from '@mui/material';
const ButtonStyle = {
  my: 2,
  color: 'white',
  display: 'block',
};
export const NavBarButton = ({ children, onClick }) => (
  <Button sx={ButtonStyle} onClick={onClick}>
    {children}
  </Button>
);
