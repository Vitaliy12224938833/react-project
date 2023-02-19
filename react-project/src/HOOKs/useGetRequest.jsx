import { useState, useEffect } from 'react';
import { getData } from '../API/get-data-from-api';

export const useGetRequest = () => {
  const [fetching, setFetching] = useState(true);
  const [state, setState] = useState(null);

  const setData = (url) =>
    useEffect(() => {
      if (fetching)
        getData(url)
          .then((res) => setState(res))
          .finally(() => setFetching(false));
    }, [fetching]);

  return [state, setData];
};
