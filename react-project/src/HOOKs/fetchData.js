import axios from 'axios';

export const memoize = (callback) => {
  const cache = new Map();
  return (arg) => {
    const value = cache.get(arg);
    if (cache.has(arg)) return value;
    const result = callback(arg);
    cache.set(arg, result);
    return result;
  };
};

export const fetchData = async (url) => {
  const getData = async (url) => {
    const res = await axios.get(url);
    return res.data;
  };
  const getDataMemo = memoize(getData);
  const data = await getDataMemo(url);

  return data;
};
