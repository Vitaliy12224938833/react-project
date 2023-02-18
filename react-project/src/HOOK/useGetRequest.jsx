import { useState, useEffect } from 'react';
import { getData } from '../API/get-data-from-api';

export const useGetRequest = () => {
  const [state, setState] = useState(null);
  const setData = (url) =>
    useEffect(() => {
      (async () => setState(await getData(url)))();
    }, [url]);

  return [state, setData];
};
