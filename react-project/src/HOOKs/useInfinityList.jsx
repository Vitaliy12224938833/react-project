import axios from 'axios';
import { useEffect, useState } from 'react';

export const useInfinityList = (url, page, setPage, content, category) => {
  const [list, setList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [isStatList, setStartlist] = useState(true);
  const [totalPage, setTotalPage] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setPage(1);
    setFetching(true);
    setStartlist(true);
    setLoad(false);
    axios.get(url).then((res) => setTotalPage(res.data.total_pages));
  }, [content, category]);

  useEffect(() => {
    if (fetching && page <= totalPage) {
      axios
        .get(url)
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
          setLoad(true);
        });
    }
  }, [fetching, url]);

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

  return [list, load];
};
