import countBy from '../../../countBy.js';

describe('countBy', () => {
  test('empty collection', () => {
    expect(countBy([], val => val)).toEqual({});
  });

  test('count elements', () => {
    expect(countBy([1, 2, 3, 2], val => val)).toEqual({ '1': 1, '2': 2, '3': 1 });
  });

  test('count even values', () => {
    expect(countBy([1, 2, 3, 4], val => val % 2 === 0)).toEqual({ 'true': 2, 'false': 2 });
  });

  test('count features in object', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false },
    ];
    expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
  });

  test('count with non-function iteratee', () => {
    expect(() => countBy([1, 2, 3, 4], true)).toThrowError(/is not a function/);
  });

  test('nested object keys', () => {
    const nestedObj = [
      { 'outer': { 'inner': 1 }, 'active': true },
      { 'outer': { 'inner': 2 }, 'active': false },
      { 'outer': { 'inner': 1 }, 'active': true },
    ];
    expect(countBy(nestedObj, value => value.outer.inner)).toEqual({ '1': 2, '2': 1 });
  });
});
