import isEmpty from '../../../isEmpty.js';

describe('isEmpty()', () => {
  test('null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('NaN', () => {
    expect(isEmpty(NaN)).toBe(true);
  });

  test('empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  test('empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('non-empty Map', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  test('empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('non-empty Set', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('boolean', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('number', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
  });

  test('function', () => {
    expect(isEmpty(() => {})).toBe(true);
  });
});