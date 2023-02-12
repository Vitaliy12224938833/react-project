const generateURL = (typeContent, movieId, language, page) => {
  const KEY = "1f63914a91cb95d33f7d8d413f4c28ca";
  return `https://api.themoviedb.org/3/${typeContent}/${movieId}?api_key=${KEY}&language=${language}&page=${page}`;
};

export default generateURL;
