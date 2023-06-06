import dropRightWhile from '../../../dropRightWhile.js';
describe('dropRightWhile', () => {
  test('should return an array', () => {
    expect(Array.isArray(dropRightWhile([], () => {}))).toBe(true);
  });

  test('should return an empty array when input array is empty', () => {
    expect(dropRightWhile([], () => {})).toEqual([]);
  });

  test('should return an empty array when input array does not satisfy the predicate', () => {
    const array = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true }
    ];
    const predicate = ({ active }) => active;
    expect(dropRightWhile(array, predicate)).toEqual([]);
  });

  test('should drop elements from the end of the array until the predicate is falsey', () => {
    const users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': true },
      { 'user': 'pebbles', 'active': true },
    ];
    const predicate = ({ active }) => active;
    expect(dropRightWhile(users, predicate)).toEqual([{ user: 'barney', active: false }]);
  });

  test('should drop elements properly with a complex predicate', () => {
    const items = [
      { 'type': 'food', 'price': 5 },
      { 'type': 'drink', 'price': 10 },
      { 'type': 'drink', 'price': 15 },
    ];
    const predicate = ({ type, price }) => type === 'drink' && price > 10;
    expect(dropRightWhile(items, predicate)).toEqual([
      { 'type': 'food', 'price': 5 },
      { 'type': 'drink', 'price': 10 },
    ]);
  });
});
