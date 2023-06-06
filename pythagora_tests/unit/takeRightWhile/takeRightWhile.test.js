import takeRightWhile from '../../../takeRightWhile.js';

describe('takeRightWhile', () => {
  test('basic test', () => {
    const users = [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': true }
    ];
    expect(takeRightWhile(users, ({ active }) => active)).toEqual([
      { 'user': 'fred', 'active': true },
      { 'user': 'pebbles', 'active': true }
    ]);
  });

  test('empty array', () => {
    expect(takeRightWhile([], ({ active }) => active)).toEqual([]);
  });

  test('all conditions true', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': true },
      { 'user': 'pebbles', 'active': true }
    ];
    expect(takeRightWhile(users, ({ active }) => active)).toEqual(users);
  });
});