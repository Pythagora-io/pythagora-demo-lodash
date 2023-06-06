import maxBy from '../../../maxBy.js';

describe('maxBy', () => {
  test('Basic usage', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }];
    expect(maxBy(objects, ({ n }) => n)).toEqual({ 'n': 2 });
  });

  test('Array with negative values', () => {
    const objects = [{ 'n': -1 }, { 'n': -2 }, { 'n': -3 }];
    expect(maxBy(objects, ({ n }) => n)).toEqual({ 'n': -1 });
  });

  test('Empty array', () => {
    const objects = [];
    expect(maxBy(objects, ({ n }) => n)).toBeUndefined();
  });

  test('Numeric values', () => {
    const objects = [1, 2, 3, 4, 5];
    expect(maxBy(objects, n => n)).toBe(5);
  });

  test('null input', () => {
    // @ts-ignore
    expect(maxBy(null, ({ n }) => n)).toBeUndefined();
  });

  test('undefined input', () => {
    // @ts-ignore
    expect(maxBy(undefined, ({ n }) => n)).toBeUndefined();
  });

  test('Strings as values', () => {
    const strings = [{ 'n': 'a' }, { 'n': 'b' }, { 'n': 'c' }];
    expect(maxBy(strings, ({ n }) => n)).toEqual({ 'n': 'c' });
  });
});
