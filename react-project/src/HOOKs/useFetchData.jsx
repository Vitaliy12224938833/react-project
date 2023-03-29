import { useState, useEffect } from 'react';
import { fetchData } from './fetchData';

export const useFetchData = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchData(url);
      setData(data);
      setIsLoading(true);
    })();
  }, [url]);
  return [data, isLoading, setUrl, setIsLoading];
};
