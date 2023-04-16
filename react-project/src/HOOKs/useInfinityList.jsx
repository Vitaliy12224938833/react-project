import { useEffect, useState } from 'react';
import { fetchData } from './fetchData';

export const useInfinityList = (params) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [param, setParam] = useState(params);

  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
    setFetching(true);
    setStartlist(true);
    setIsLoading(false);
    (async () => {
      const data = await fetchData({ ...param, page: page });
      setTotalPage(data.total_pages);
    })();
  }, [param]);

  useEffect(() => {
    if (fetching && page <= totalPage) {
      (async () => {
        const data = await fetchData({ ...param, page: page });
        console.log(data);
        if (data) {
          if (!isStatList) {
            setList([...list, ...data.results]);
          } else {
            setList(data.results);
          }
          setPage(page + 1);
          setStartlist(false);
          setFetching(false);
          setIsLoading(true);
        }
      })();
    }
  }, [fetching, page]);

  useEffect(() => {
    setFetching(true);
  }, [param]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      200
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return [list, isLoading, setParam];
};
