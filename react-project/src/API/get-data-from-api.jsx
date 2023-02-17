import axios from 'axios';

export function getData(url) {
  return axios.get(url).then((res) => res.data);
}
