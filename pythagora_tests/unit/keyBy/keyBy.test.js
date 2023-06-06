import keyBy from '../../../keyBy.js';

describe('keyBy', () => {
  test('should create an object with keys by iteratee', () => {
    const array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 }
    ];
    const result = keyBy(array, ({ code }) => String.fromCharCode(code));
    expect(result).toEqual({ 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } });
  });

  test('should return an empty object for an empty array', () => {
    const result = keyBy([], (value) => value);
    expect(result).toEqual({});
  });

  test('should create an object with keys by length of string', () => {
    const array = ['one', 'two', 'three', 'four'];
    const result = keyBy(array, (value) => value.length);
    expect(result).toEqual({ '3': 'two', '4': 'four', '5': 'three' });
  });
});
