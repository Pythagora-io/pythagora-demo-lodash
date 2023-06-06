import fromEntries from '../../../fromEntries.js';
describe('fromEntries', () => {
  test('should return an object from array of key-value pairs', () => {
    expect(fromEntries([['a', 1], ['b', 2]])).toEqual({ 'a': 1, 'b': 2 });
  });

  test('should return an empty object for empty array input', () => {
    expect(fromEntries([])).toEqual({});
  });

  test('should return an empty object for null input', () => {
    expect(fromEntries(null)).toEqual({});
  });

  test('should return an empty object for undefined input', () => {
    expect(fromEntries(undefined)).toEqual({});
  });

  test('should return an object with missing values for incomplete pairs', () => {
    expect(fromEntries([['a', 1], ['b']])).toEqual({ 'a': 1, 'b': undefined });
  });

  test('should overwrite duplicate keys with the latest value', () => {
    expect(fromEntries([['a', 1], ['a', 2]])).toEqual({ 'a': 2 });
  });
});
