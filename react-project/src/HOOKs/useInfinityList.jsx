import axios from 'axios';
import { useEffect, useState } from 'react';

export const useInfinityList = (initialUrl) => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(initialUrl);
  const [list, setList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
    setFetching(true);
    setStartlist(true);
    setIsLoading(false);
    axios
      .get(`${url}${page}`)
      .then((res) => setTotalPage(res.data.total_pages));
  }, [url]);

  useEffect(() => {
    if (fetching && page <= totalPage) {
      axios
        .get(`${url}${page}`)
        .then((res) => {
          if (!isStatList) {
            setList([...list, ...res.data.results]);
          } else {
            setList(res.data.results);
          }
          setPage(page + 1);
        })
        .finally(() => {
          setStartlist(false);
          setFetching(false);
          setIsLoading(true);
        });
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setStartlist(false);
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return [list, isLoading, setUrl];
};
