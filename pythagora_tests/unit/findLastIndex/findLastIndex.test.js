import findLastIndex from '../../../findLastIndex.js';

describe('findLastIndex', () => {
  test('should return -1 for empty array', () => {
    expect(findLastIndex([], () => true)).toBe(-1);
  });

  test('should return index of last element matching predicate', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false },
      { 'user': 'john',    'active': true }
    ];
    expect(findLastIndex(users, ({ active }) => active)).toBe(3);
  });

  test('should return -1 if no elements match predicate', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true }
    ];
    expect(findLastIndex(users, ({ active }) => !active)).toBe(-1);
  });

  test('should work with fromIndex argument', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false },
      { 'user': 'john',    'active': true }
    ];
    expect(findLastIndex(users, ({ active }) => active, 2)).toBe(0);
  });

  test('should handle fromIndex being greater than array length', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false }
    ];
    expect(findLastIndex(users, ({ active }) => active, 5)).toBe(0);
  });

  test('should handle fromIndex being negative', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true },
      { 'user': 'john',    'active': true }
    ];
    expect(findLastIndex(users, ({ active }) => !active, -2)).toBe(-1);
  });
});
