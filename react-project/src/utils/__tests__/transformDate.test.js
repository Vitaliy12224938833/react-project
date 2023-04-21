import { transformDate } from '../transformDate';

describe('transformDate', () => {
  test('returns correctly formatted date string', () => {
    expect(transformDate('2000-05-22')).toEqual('22 05 2000');
    expect(transformDate('2000-05')).toEqual('05 2000');
  });

  test('returns null for empty input', () => {
    expect(transformDate()).toBeNull();
  });

  test('returns null for non-string input', () => {
    expect(transformDate(123)).toBeNull();
  });
});
