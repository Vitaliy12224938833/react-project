export const updateSeasonUrl = (url, newValue, seasonNum = '1') => {
  if (!url || !newValue) return null;
  const urlArray = url.split('/');
  urlArray[1] = newValue;
  urlArray.push(seasonNum);
  return urlArray.join('/');
};
