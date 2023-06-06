import isArrayLikeObject from '../../../isArrayLikeObject.js';

describe('isArrayLikeObject', () => {
  test('isArrayLikeObject([1, 2, 3])', () => {
    expect(isArrayLikeObject([1, 2, 3])).toBe(true);
  });

  test("isArrayLikeObject('abc')", () => {
    expect(isArrayLikeObject('abc')).toBe(false);
  });

  test('isArrayLikeObject(Function)', () => {
    expect(isArrayLikeObject(Function)).toBe(false);
  });

  test('isArrayLikeObject(null)', () => {
    expect(isArrayLikeObject(null)).toBe(false);
  });

  test('isArrayLikeObject(undefined)', () => {
    expect(isArrayLikeObject(undefined)).toBe(false);
  });

  test('isArrayLikeObject({})', () => {
    expect(isArrayLikeObject({})).toBe(false);
  });

  test('isArrayLikeObject(arguments)', () => {
    (function() {
      expect(isArrayLikeObject(arguments)).toBe(true);
    })();
  });

  test('isArrayLikeObject([])', () => {
    expect(isArrayLikeObject([])).toBe(true);
  });

  test('isArrayLikeObject({length: 3})', () => {
    expect(isArrayLikeObject({length: 3})).toBe(true);
  });

  test('isArrayLikeObject({length: "3", 2: true})', () => {
    expect(isArrayLikeObject({length: "3", 2: true})).toBe(false);
  });

  test('isArrayLikeObject(new Map())', () => {
    expect(isArrayLikeObject(new Map())).toBe(false);
  });

  test('isArrayLikeObject(new Set())', () => {
    expect(isArrayLikeObject(new Set())).toBe(false);
  });
});