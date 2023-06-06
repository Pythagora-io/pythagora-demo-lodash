import orderBy from '../../../orderBy.js';
import _ from 'lodash';

describe('orderBy', () => {
  test('[]', () => {
    expect(orderBy([], [])).toEqual([]);
  });

  test('[1, 2, 3]', () => {
    expect(orderBy([1, 2, 3], [])).toEqual([3, 2, 1]);
  });

  const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];

  test('users', () => {
    const output = orderBy(users, ['user', 'age'], ['asc', 'desc']);
    expect(output).toHaveLength(users.length);
    expect(_.isEqual(output, [
      { 'user': 'barney', 'age': 36 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred', 'age': 48 },
      { 'user': 'fred', 'age': 40 }
    ])).toBe(true);
  });

  test('users with custom compare functions', () => {
    const output = orderBy(users, ['user', 'age'], [
      (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
      (a, b) => a - b,
    ]);
    expect(output).toHaveLength(users.length);
    expect(_.isEqual(output, [
      { 'user': 'barney', 'age': 34 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred', 'age': 40 },
      { 'user': 'fred', 'age': 48 }
    ])).toBe(true);
  });

  test('undefined collection', () => {
    expect(orderBy(undefined, [])).toEqual([]);
  });

  test('null collection', () => {
    expect(orderBy(null, [])).toEqual([]);
  });
});
