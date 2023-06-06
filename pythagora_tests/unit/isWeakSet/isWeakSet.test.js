import isWeakSet from '../../../isWeakSet.js';

describe('isWeakSet', () => {
  test('WeakSet instance is recognized as WeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  test('Set instance is not recognized as WeakSet', () => {
    expect(isWeakSet(new Set())).not.toBe(true);
  });

  test('Array instance is not recognized as WeakSet', () => {
    expect(isWeakSet([])).not.toBe(true);
  });

  test('Object instance is not recognized as WeakSet', () => {
    expect(isWeakSet({})).not.toBe(true);
  });

  test('Number is not recognized as WeakSet', () => {
    expect(isWeakSet(0)).toBe(false);
  });

  test('Boolean value is not recognized as WeakSet', () => {
    expect(isWeakSet(true)).toBe(false);
  });

  test('String primitive value is not recognized as WeakSet', () => {
    expect(isWeakSet('abc')).toBe(false);
  });

  test('Null value is not recognized as WeakSet', () => {
    expect(isWeakSet(null)).toBe(false);
  });

  test('Undefined value is not recognized as WeakSet', () => {
    expect(isWeakSet(undefined)).toBe(false);
  });

  test('Symbol is not recognized as WeakSet', () => {
    expect(isWeakSet(Symbol())).toBe(false);
  });

  test('Function instance is not recognized as WeakSet', () => {
    expect(isWeakSet(() => {})).toBe(false);
  });
});
