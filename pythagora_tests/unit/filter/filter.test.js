import filter from '../../../filter.js';
describe('filter', () => {
  test('returns an empty array when passed an empty array', () => {
    expect(filter([], (item) => item)).toEqual([]);
  });

  test('filters out negative numbers', () => {
    const numbers = [1, -2, 3, -4, 5, -6];
    const predicate = (num) => num > 0;
    expect(filter(numbers, predicate)).toEqual([1, 3, 5]);
  });

  test('filters out even numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const predicate = (num) => num % 2 !== 0;
    expect(filter(numbers, predicate)).toEqual([1, 3, 5]);
  });

  test('filters out undefined and null values', () => {
    const values = [1, null, undefined, 2, null, 3, undefined];
    const predicate = (value) => value != null;
    expect(filter(values, predicate)).toEqual([1, 2, 3]);
  });

  test('filters out inactive users', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ];
    const predicate = ({ active }) => active;
    expect(filter(users, predicate)).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('returns an empty array when all items fail the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
    ];
    const predicate = ({ active }) => active;
    expect(filter(users, predicate)).toEqual([]);
  });

  test('returns an empty array when passed a null object', () => {
    expect(filter(null, (value) => value)).toEqual([]);
  });

  test('returns an empty array when passed an undefined object', () => {
    expect(filter(undefined, (value) => value)).toEqual([]);
  });
});
