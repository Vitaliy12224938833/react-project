import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Box } from '@mui/material';

const globalConteinerStyle = {
  maxWidth: '1600px',
  width: '100%',
  margin: ' 0 auto',
  overflow: 'hidden',
  background: '#fefefe',
  boxShadow: 10,
};

export const Layout = () => {
  return (
    <>
      <Box sx={globalConteinerStyle}>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Box>
    </>
  );
};
