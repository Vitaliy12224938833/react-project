import React from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserDataContext } from '../../Context/Context';
import {
  readFromFirestore,
  removeFromGlobalList,
  removeFromList,
  saveInGlobalList,
  saveInList,
} from '../../firebaseApi';

export const SaveOrRemoveButton = React.memo(
  ({ children, category, id, mediaType }) => {
    const userId = useContext(UserDataContext);
    if (!userId) return;
    const [isItInList, setIsItInList] = useState();
    const [isSave, setIsSave] = useState(false);
    const [isRemove, setIsRemove] = useState(false);

    useEffect(() => {
      if (userId) {
        (async () => {
          const { userData } = await readFromFirestore(userId);
          setIsItInList(!!userData.mediaList[mediaType][category][id]);
          setIsRemove(false);
          setIsSave(false);
        })();
      }
    }, [userId, isSave, isRemove]);

    const remove = async () => {
      await removeFromGlobalList({ userId, id, mediaType });
      await removeFromList({ userId, id, category, mediaType });
      setIsRemove(true);
    };

    const save = async () => {
      await saveInGlobalList({ userId, id, mediaType });
      await saveInList({ id, userId, category, mediaType });
      setIsSave(true);
    };

    console.log(isItInList);
    return isItInList ? (
      <Button onClick={remove}>{`remove from ${children}`}</Button>
    ) : (
      <Button onClick={save}>{children}</Button>
    );
  }
);
