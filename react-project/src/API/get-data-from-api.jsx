import axios from "axios";

function getData(url) {
  return axios
    .get(url)
    .then((res) => res.data)
    .then((res) => res.results);
}

export default getData;
