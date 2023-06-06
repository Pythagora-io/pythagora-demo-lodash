import eqDeep from '../../../eqDeep.js';
describe('isEqual', () => {
  test('returns true for identical objects', () => {
    const object = { a: 1, b: { c: 3 } };
    const other = { a: 1, b: { c: 3 } };
    expect(eqDeep(object, other)).toBe(true);
  });

  test('returns false for non-identical objects', () => {
    const object = { a: 1, b: { c: 3 } };
    const other = { a: 1, b: { c: 4 } };
    expect(eqDeep(object, other)).toBe(false);
  });

  test('returns true for identical arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 3]];
    expect(eqDeep(arr1, arr2)).toBe(true);
  });

  test('returns false for non-identical arrays', () => {
    const arr1 = [1, [2, 3]];
    const arr2 = [1, [2, 4]];
    expect(eqDeep(arr1, arr2)).toBe(false);
  });

  test('returns true for identical primitives', () => {
    expect(eqDeep('primitive', 'primitive')).toBe(true);
    expect(eqDeep(1, 1)).toBe(true);
    expect(eqDeep(true, true)).toBe(true);
  });

  test('returns false for non-identical primitives', () => {
    expect(eqDeep('primitive', 'primitives')).toBe(false);
    expect(eqDeep(1, 2)).toBe(false);
    expect(eqDeep(true, false)).toBe(false);
  });

  test('returns false when comparing object and primitive', () => {
    const object = { a: 1, b: { c: 3 } };
    expect(eqDeep(object, 'primitive')).toBe(false);
  });

  test('returns true for undefined values', () => {
    expect(eqDeep(undefined, undefined)).toBe(true);
  });

  test('returns true for NaN values', () => {
    expect(eqDeep(NaN, NaN)).toBe(true);
  });

  test('returns false when comparing NaN to number', () => {
    expect(eqDeep(NaN, 1)).toBe(false);
  });
});
