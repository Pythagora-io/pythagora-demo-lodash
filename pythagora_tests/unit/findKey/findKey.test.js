import findKey from '../../../findKey.js';
describe('findKey', () => {
  test('should return the correct key when predicate is satisfied', () => {
    const users = {
      'barney': { 'age': 36, 'active': true },
      'fred': { 'age': 40, 'active': false },
      'pebbles': { 'age': 1, 'active': true }
    };

    expect(findKey(users, ({ age }) => age < 40)).toBe('barney');
  });

  test('should return undefined when predicate is not satisfied', () => {
    const users = {
      'barney': { 'age': 60, 'active': true },
      'fred': { 'age': 90, 'active': false },
      'pebbles': { 'age': 50, 'active': true }
    };

    expect(findKey(users, ({ age }) => age < 40)).toBeUndefined();
  });

  test('should return undefined when object is null', () => {
    expect(findKey(null, ({ age }) => age < 40)).toBeUndefined();
  });

  test('should return undefined when object is undefined', () => {
    expect(findKey(undefined, ({ age }) => age < 40)).toBeUndefined();
  });
});
