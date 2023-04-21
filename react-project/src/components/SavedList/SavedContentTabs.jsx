import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem, Box, Tab, Tabs } from '@mui/material';

import { UserDataContext } from '../../Context/Context';
import { readFromFirestore } from '../../firebaseApi';

export const SavedContentTabs = React.memo(({ list }) => {
  const userId = useContext(UserDataContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mediaType, setMediaType] = useState('movie');
  const [mediaList, setList] = useState([]);
  const [value, setValue] = useState(0);

  const history = useNavigate();

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setMediaType(item);
    if (item === 'all') {
      handleClose();
      history(`all`);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        if (userData.mediaList)
          setList(Object.keys(userData.mediaList[mediaType]));
      })();
    }
  }, [mediaType]);

  const handleClose = () => {
    setAnchorEl(null);
    setMediaType('');
  };

  const handleLinkClick = (mediaType, listType) => {
    handleClose();
    history(`/home/${mediaType}/${listType}`);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='basic tabs example'
      >
        <Tab key={0} label='All' onClick={(e) => handleClick(e, 'all')} />
        {list.map((item, idx) => (
          <Tab
            key={idx + 1}
            label={item}
            onClick={(e) => handleClick(e, item)}
          />
        ))}
      </Tabs>
      <Menu
        id='saved-content-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {mediaList.sort().map((item, idx) => (
          <MenuItem key={idx} onClick={() => handleLinkClick(mediaType, item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
});
