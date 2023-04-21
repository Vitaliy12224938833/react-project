import { transformDateForReview } from '../transformDateForReview';

describe('transformDateForReview', () => {
  test('should return null for null input', () => {
    expect(transformDateForReview(null)).toBeNull();
  });

  test('should return null for invalid input', () => {
    expect(transformDateForReview('not a date')).toBeNull();
    expect(transformDateForReview('2022-03-1T00:00:00')).toBeNull();
  });

  test('should transform valid date input', () => {
    expect(transformDateForReview('2022-03-15T00:00:00')).toBe('15 03 2022');
  });
});
