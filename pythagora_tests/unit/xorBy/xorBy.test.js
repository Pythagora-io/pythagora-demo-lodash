import { default as xorBy } from '../../../xorBy.js';

describe('xorBy', () => {
  test('Test 1', () => {
    const input = [
      [2.1, 1.2],
      [2.3, 3.4],
    ];
    const iteratee = Math.floor;
    const expected = [1.2, 3.4];
    expect(xorBy(...input, iteratee)).toEqual(expected);
  });

  test('Test 2', () => {
    const input = [
      [1.5, 2.2],
      [2.4, 3],
      [3.5, 4],
      [4.5, 5],
    ];
    const iteratee = Math.ceil;
    const expected = [1.5, 3.5, 4.5];
    expect(xorBy(...input, iteratee)).toEqual(expected);
  });

  test('Test 3', () => {
    const input = [
      ['apple', 'banana'],
      ['banana', 'orange'],
    ];
    const iteratee = (value) => value[0];
    const expected = ['apple', 'orange'];
    expect(xorBy(...input, iteratee)).toEqual(expected);
  });

  test('Test 4', () => {
    const input = [
      [1, 2, 3],
      [1, 3, 5],
      [2, 4, 6],
    ];
    const iteratee = (value) => value % 2;
    const expected = [];
    expect(xorBy(...input, iteratee)).toEqual(expected);
  });

  test('Test 5', () => {
    const input = [
      [],
      [2.3, 3.4],
    ];
    const iteratee = Math.floor;
    const expected = [2.3, 3.4];
    expect(xorBy(...input, iteratee)).toEqual(expected);
  });
});
