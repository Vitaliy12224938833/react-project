import { useState, useEffect } from 'react';
import { getData } from '../API/get-data-from-api';

export const useGetRequest = (url) => {
  const [fetching, setFetching] = useState(true);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (fetching)
      getData(url)
        .then((res) => setState(res))
        .finally(() => setFetching(false));
  }, []);

  return [state];
};
