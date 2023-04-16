import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { MediaPageCard } from '../../components/SavedList/MediaPageCard';
import { UserDataContext } from '../../Context/Context';
import { readFromFirestore } from '../../firebaseApi';

export const AllSavedMediaPage = React.memo(() => {
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);
  const [isRead, setIsRead] = useState(false);
  const { mediaType, listType } = useParams();
  const userId = useContext(UserDataContext);

  useEffect(() => {
    if (userId) {
      (async () => {
        const { userData } = await readFromFirestore(userId);
        setData(userData.allMedia || null);
        setList(Object.keys(userData.allMedia || []));
        setIsRead(true);
      })();
    }
  }, [mediaType, listType]);
  return (
    isRead &&
    list.map(
      (item) =>
        data[item].bool && (
          <MediaPageCard
            key={data[item].id}
            mediaType={data[item].mediaType}
            id={data[item].id}
          />
        )
    )
  );
});
