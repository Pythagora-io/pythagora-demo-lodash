import filterObject from '../../../filterObject.js';
describe('filterObject', () => {
  test('filters values that match the predicate', () => {
    const object = { a: 5, b: 8, c: 10 };
    const filtered = filterObject(object, (n) => n % 5 === 0);
    expect(filtered).toEqual([5, 10]);
  });

  test('returns an empty array if nothing matches the predicate', () => {
    const object = { a: 1, b: 3, c: 7 };
    const filtered = filterObject(object, (n) => n % 5 === 0);
    expect(filtered).toEqual([]);
  });

  test('returns an empty array for an empty object', () => {
    const filtered = filterObject({}, (n) => n % 5 === 0);
    expect(filtered).toEqual([]);
  });

  test('returns an empty array if the object is null', () => {
    const filtered = filterObject(null, (n) => n % 5 === 0);
    expect(filtered).toEqual([]);
  });

  test('returns an empty array if the object is undefined', () => {
    const filtered = filterObject(undefined, (n) => n % 5 === 0);
    expect(filtered).toEqual([]);
  });

  test('predicate receives value, key, and object as arguments', () => {
    const object = { a: 2 };
    const predicate = jest.fn();
    filterObject(object, predicate);
    expect(predicate).toHaveBeenCalledWith(2, 'a', object);
  });
});
