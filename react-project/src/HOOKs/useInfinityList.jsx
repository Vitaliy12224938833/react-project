import { useEffect, useState } from 'react';
import { getData } from '../API/get-data-from-api';

export const useInfinityList = (url, page, setPage, content, category) => {
  const [list, setList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setPage(1);
    setFetching(true);
    setStartlist(true);
  }, [content, category]);

  useEffect(() => {
    if (fetching) {
      setLoader(true);
      getData(url)
        .then((res) => {
          if (!isStatList) {
            setList([...list, ...res.results]);
            setLoader(false);
          } else {
            setList(res.results);
          }
          setPage(page + 1);
        })
        .finally(() => {
          setStartlist(false);
          setFetching(false);
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

  return [list, loader];
};
