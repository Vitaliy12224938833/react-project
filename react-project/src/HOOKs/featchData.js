import axios from 'axios';

export const memoize = (callback) => {
  const cache = new Map();
  return (arg) => {
    const value = cache.get(arg);

    if (cache.has(arg)) return value;
    const result = callback(arg);
    console.log(result);
    cache.set(arg, result);
    return result;
  };
};

export const fathcData = async (url) => {
  const getData = async (url) => {
    const res = await axios.get(url);
    return res.data;
  };
  const getDataMemo = memoize(getData);
  const data = await getDataMemo(url);

  return data;
};
