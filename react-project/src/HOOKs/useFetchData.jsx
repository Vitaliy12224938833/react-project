import { useState, useEffect } from 'react';
import { fetchData } from './fetchData';

export const useFetchData = (params) => {
  const [data, setData] = useState(null);
  const [param, setParam] = useState(params);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchData(param);
      setData(data);
      console.log(data);
      setIsLoading(true);
    })();
  }, [param]);

  return [data, isLoading, setParam, setIsLoading];
};
