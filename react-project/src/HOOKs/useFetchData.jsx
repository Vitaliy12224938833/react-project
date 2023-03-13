import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => setData(res.data))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(true));
    }, [1000]);
  }, [url]);
  return [data, isLoading, setUrl, setIsLoading, isError];
};
