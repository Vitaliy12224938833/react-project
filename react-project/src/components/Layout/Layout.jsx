import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar } from '../NavBar/NavBar';
import { UserDataContext } from '../../Context/Context';
import { authOn } from '../../firebaseApi';

const globalConteinerStyle = {
  maxWidth: '1600px',
  width: '100%',
  margin: ' 0 auto',
  overflow: 'hidden',
  background: '#fefefe',
  boxShadow: 10,
};

export const Layout = () => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    (async () => {
      const { uid } = await authOn();
      if (uid) {
        setUserId(uid);
      } else {
        setUserId(null);
      }
    })();
  }, []);

  return (
    <UserDataContext.Provider value={userId}>
      <Box sx={globalConteinerStyle}>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Box>
    </UserDataContext.Provider>
  );
};
