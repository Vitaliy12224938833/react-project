import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { MediaPageCard } from '../../components/SavedList/MediaPageCard';
import { UserDataContext } from '../../Context/Context';
import { readFromFirestore } from '../../firebaseApi';

export const SavedListPage = React.memo(() => {
  const [userData, setUserData] = useState(null);
  const [keysList, setKeysList] = useState([]);
  const [isRead, setIsRead] = useState(false);
  const { mediaType, listType } = useParams();
  const userId = useContext(UserDataContext);

  useEffect(() => {
    if (!!userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        setUserData(userData.mediaList[mediaType][listType] || []);
        setKeysList(Object.keys(userData.mediaList[mediaType][listType] || []));
        setIsRead(true);
      })();
    }
  }, [mediaType, listType]);

  return (
    isRead &&
    keysList.map((item) => {
      if (userData[item]) {
        return (
          <MediaPageCard
            key={item}
            mediaType={mediaType}
            listType={listType}
            id={item}
          />
        );
      }
    })
  );
});
