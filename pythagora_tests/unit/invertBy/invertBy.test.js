import invertBy from '../../../invertBy.js';
describe('invertBy', () => {
  test('should invert object with provided iteratee', () => {
    const object = { a: 1, b: 2, c: 1 };
    const expected = { group1: ['a', 'c'], group2: ['b'] };
    expect(invertBy(object, value => `group${value}`)).toEqual(expected);
  });

  test('should handle empty object', () => {
    const object = {};
    expect(invertBy(object, value => `group${value}`)).toEqual({});
  });

  test('should handle object with unique values', () => {
    const object = { a: 1, b: 2, c: 3 };
    const expected = { group1: ['a'], group2: ['b'], group3: ['c'] };
    expect(invertBy(object, value => `group${value}`)).toEqual(expected);
  });

  test('should handle object with non-unique values', () => {
    const object = { a: 1, b: 1, c: 1 };
    const expected = { group1: ['a', 'b', 'c'] };
    expect(invertBy(object, value => `group${value}`)).toEqual(expected);
  });

  test('should handle object with different types of values', () => {
    const object = { a: 1, b: '2', c: true, d: null };
    const expected = { 1: ['a'], 2: ['b'], true: ['c'], null: ['d'] };
    expect(invertBy(object, value => value)).toEqual(expected);
  });

  test('should handle complex iteratee', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    const expected = { even: ['b', 'd'], odd: ['a', 'c'] };
    expect(invertBy(object, value => (value % 2 === 0 ? 'even' : 'odd'))).toEqual(expected);
  });
});
