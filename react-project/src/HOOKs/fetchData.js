import { instance } from '../firebaseApi';

export const fetchData = async (params) => {
  const res = await instance.get('/tmdb/', {
    params: params,
  });
  return res.data;
};
