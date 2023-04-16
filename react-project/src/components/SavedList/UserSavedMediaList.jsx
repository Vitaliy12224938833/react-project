import { useEffect, useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

import { UserDataContext } from '../../Context/Context';
import { SavedContentTabs } from './SavedContentTabs';
import { readFromFirestore } from '../../firebaseApi';

export const UserSavedMediaList = () => {
  const [list, setList] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const userId = useContext(UserDataContext);

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        setList(Object.keys(userData.mediaList || []));
        setIsRead(true);
      })();
    }
  }, []);

  return (
    isRead && (
      <Box>
        <Box sx={{ display: 'flex', gap: 100 }}>
          <SavedContentTabs list={list} />
        </Box>
        <Outlet />
      </Box>
    )
  );
};
