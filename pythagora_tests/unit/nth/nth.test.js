import nth from '../../../nth.js';

describe('nth', () => {
  test('Test 1', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, 1)).toBe('b');
  });

  test('Test 2', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, -2)).toBe('c');
  });

  test('Test 3', () => {
    const array = [];
    expect(nth(array, 1)).toBeUndefined();
  });

  test('Test 4', () => {
    expect(nth(null, 1)).toBeUndefined();
  });

  test('Test 5', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, 100)).toBeUndefined();
  });

  test('Test 6', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, -100)).toBeUndefined();
  });

  test('Test 7', () => {
    const array = ['a', 'b', 'c', 'd'];
    expect(nth(array, '1')).toBeUndefined();
  });

  test('Test 8', () => {
    const array = 'abcde';
    expect(nth(array, 2)).toBe('c');
  });
});