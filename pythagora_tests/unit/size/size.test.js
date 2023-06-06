import size from '../../../size.js';
import isArrayLike from '../../../isArrayLike.js';
import isString from '../../../isString.js';
import stringSize from '../../../.internal/stringSize.js';
import getTag from '../../../.internal/getTag.js';

describe('size', () => {
  test(`size([1, 2, 3])`, () => {
    expect(size([1, 2, 3])).toBe(3);
  });

  test(`size([])`, () => {
    expect(size([])).toBe(0);
  });

  test(`size('pebbles')`, () => {
    expect(size('pebbles')).toBe(7);
  });

  test(`size({ 'a': 1, 'b': 2 })`, () => {
    expect(size({ 'a': 1, 'b': 2 })).toBe(2);
  });

  test(`size(Function)`, () => {
    expect(size(function() {})).toBe(0);
  });

  test(`size(null)`, () => {
    expect(size(null)).toBe(0);
  });

  test(`size(new Set([1, 2, 3]))`, () => {
    expect(size(new Set([1, 2, 3]))).toBe(3);
  });

  test(`size(new Map([['a', 1], ['b', 2], ['c', 3]]))`, () => {
    expect(size(new Map([['a', 1], ['b', 2], ['c', 3]]))).toBe(3);
  });

  test(`size(undefined)`, () => {
    expect(size(void 0)).toBe(0);
  });

  test(`size(true)`, () => {
    expect(size(true)).toBe(0);
  });

  test(`size(false)`, () => {
    expect(size(false)).toBe(0);
  });

  test(`size(0)`, () => {
    expect(size(0)).toBe(0);
  });

  test(`size({ 'a': 1, 'b': 2, 'length': 9 })`, () => {
    expect(size({ 'a': 1, 'b': 2, 'length': 9 })).toBe(3);
  });

  test(`size('')`, () => {
    expect(size('')).toBe(0);
  });

  test(`size(new ArrayBuffer(10))`, () => {
    expect(size(new ArrayBuffer(10))).toBe(0);
  });

  test(`size(new Set([]))`, () => {
    expect(size(new Set([]))).toBe(0);
  });

  test(`size(new Map([]))`, () => {
    expect(size(new Map([]))).toBe(0);
  });
});
