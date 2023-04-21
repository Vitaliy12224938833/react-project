import { createStrWithNameFromData } from '../createStrWithNameFromData';

describe('createStrWithNameFromData', () => {
  test('should return a string of names separated by commas', () => {
    const data = [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }];
    expect(createStrWithNameFromData(data)).toBe('test1, test2, test3');
  });
  test('should return null when given an empty array', () => {
    expect(createStrWithNameFromData([])).toBeNull;
  });
  test('should return null when given an array with an invalid property name', () => {
    const data = [{ nama: 'test1' }, { nama: 'test2' }, { nama: 'test3' }];
    expect(createStrWithNameFromData(data)).toBeNull;
  });
  test('should remove null or undefined values from the array', () => {
    const data = [{ name: 'test1' }, { name: null }, { name: 'test3' }];
    expect(createStrWithNameFromData(data)).toBe('test1, test3');
  });
});
