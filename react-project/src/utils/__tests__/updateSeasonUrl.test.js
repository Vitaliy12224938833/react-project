import { updateSeasonUrl } from '../updateSeasonUrl';

describe('updateSeasonUrl', () => {
  test('should return updated url with new value and season number', () => {
    const url = '/tv/Breaking%20Bad/1396';
    const newValue = 'season';
    const seasonNum = 5;
    const expectedUrl = '/season/Breaking%20Bad/1396/5';
    expect(updateSeasonUrl(url, newValue, seasonNum)).toEqual(expectedUrl);
  });

  test('should return the original url if no update value is provided', () => {
    const url = '/tv/Breaking%20Bad/1396';
    const seasonNum = 4;
    expect(updateSeasonUrl(url, null, seasonNum)).toBeNull();
  });

  test('should return the original url if no season number is provided', () => {
    const url = '/tv/Breaking%20Bad/1396';
    const newValue = 'season';
    const expectedUrl = '/season/Breaking%20Bad/1396/1';
    expect(updateSeasonUrl(url, newValue)).toEqual(expectedUrl);
  });

  test('should return null if the url is not a string', () => {
    const url = null;
    const newValue = 'season';
    const seasonNum = 4;
    expect(updateSeasonUrl(url, newValue, seasonNum)).toBeNull();
  });
});
