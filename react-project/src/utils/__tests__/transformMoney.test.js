import { transformMoney } from '../transformMoney.mjs';

describe('transformMoney', () => {
  test('should transform number to money format', () => {
    expect(transformMoney(123456.789)).toBe('123 456.79 $');
  });
  test('should return null if input is empty', () => {
    expect(transformMoney()).toBeNull();
  });
  test('should return null if input is not a number', () => {
    expect(transformMoney('abc')).toBeNull();
  });
  test('should transform number with zero decimal places to money format', () => {
    expect(transformMoney(1000)).toBe('1 000.00 $');
    expect(transformMoney(1000000)).toBe('1 000 000.00 $');
    expect(transformMoney(10000000)).toBe('10 000 000.00 $');
    expect(transformMoney(100000000.23)).toBe('100 000 000.23 $');
  });
  test('should return null if input is empty', () => {
    expect(transformMoney(0)).toBeNull();
  });
});
