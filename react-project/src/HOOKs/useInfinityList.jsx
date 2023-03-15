import {  useEffect, useState } from 'react';
import axios from 'axios';
import { fathcData } from './featchData';

export const useInfinityList = (initialUrl) => {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(initialUrl);
  const [list, setList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fetching && page <= totalPage) {
      (async () => {
        const data = await fathcData(`${url}${page}`);
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
    setPage(1);
    setFetching(true);
    setStartlist(true);
    setIsLoading(false);
    axios
      .get(`${url}${page}`)
      .then((res) => setTotalPage(res.data.total_pages));
  }, [url]);

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

  return [list, isLoading, setUrl];
};
