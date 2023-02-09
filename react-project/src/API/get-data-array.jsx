import getData from "./API/get-data-from-api";
import generateURL from "./API/generate-url";
const url = generateURL("popular", "en");

const getDataArry = (url) => getData(url);
