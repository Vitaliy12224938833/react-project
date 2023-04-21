import { transformRuntime } from '../transformRuntime';

describe('transformRuntime', () => {
  test('should return null when passed a falsy value', () => {
    expect(transformRuntime(null)).toBeNull();
    expect(transformRuntime(undefined)).toBeNull();
    expect(transformRuntime('')).toBeNull();
    expect(transformRuntime(false)).toBeNull();
    expect(transformRuntime(0)).toBeNull();
  });

  test('should return null when passed a string value', () => {
    expect(transformRuntime('123')).toBeNull();
    expect(transformRuntime('abc')).toBeNull();
    expect(transformRuntime('1 hour')).toBeNull();
  });

  test('should return formatted time string when passed a valid number', () => {
    expect(transformRuntime(0)).toBeNull();
    expect(transformRuntime(30)).toBe('30 min');
    expect(transformRuntime(60)).toBe('1 hours');
    expect(transformRuntime(90)).toBe('1 hours 30 min');
    expect(transformRuntime(120)).toBe('2 hours');
    expect(transformRuntime(150)).toBe('2 hours 30 min');
    expect(transformRuntime(180)).toBe('3 hours');
  });
});
