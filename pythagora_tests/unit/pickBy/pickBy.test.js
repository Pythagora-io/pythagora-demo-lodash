import pickBy from '../../../pickBy.js';
import isNumber from '../../../isNumber.js';

describe('pickBy', () => {
  test('should return an object with only the properties for which the predicate returns truthy', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pickBy(obj, isNumber)).toEqual({ a: 1, c: 3 });
  });

  test('should return an empty object if given object is null', () => {
    expect(pickBy(null, isNumber)).toEqual({});
  });

  test('should return an empty object if given object is undefined', () => {
    expect(pickBy(undefined, isNumber)).toEqual({});
  });

  test('should return an empty object if predicate always returns falsy', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pickBy(obj, () => false)).toEqual({});
  });

  test('should return the same object if predicate always returns truthy', () => {
    const obj = { a: 1, b: '2', c: 3 };
    expect(pickBy(obj, () => true)).toEqual(obj);
  });

  test('should work with custom predicates', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pickBy(obj, (value, key) => key === 'a' || value === 3)).toEqual({ a: 1, c: 3 });
  });

  test('should work with empty objects', () => {
    const obj = {};
    expect(pickBy(obj, isNumber)).toEqual({});
  });
});
