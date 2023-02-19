import { useState, useEffect } from 'react';
import { getData } from '../API/get-data-from-api';

export const useGetRequest = (fetching) => {
  const [state, setState] = useState(null);
  const setData = (url) =>
    useEffect(() => {
      (async () => setState(await getData(url)))();
    }, [fetching]);

  return [state, setData];
};
