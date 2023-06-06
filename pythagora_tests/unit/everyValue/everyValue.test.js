import everyValue from '../../../everyValue.js';
describe('everyValue test suite', () => {
  test('should return true every value passes', () => {
    expect(everyValue({ a: 2, b: 4 }, (value) => value % 2 === 0)).toBe(true);
  });

  test('should return false when some values fail', () => {
    expect(everyValue({ a: 2, b: 3 }, (value) => value % 2 === 0)).toBe(false);
  });

  test('should check all object properties', () => {
    expect(everyValue({ a: { b: 2 }, c: 4 }, (value) => typeof value === 'number')).toBe(false);
  });

  test('should handle non-object input', () => {
    expect(everyValue(null, (value) => Boolean(value))).toBe(true);
  });

  test('should handle object with non-boolean values', () => {
    expect(everyValue({ a: 0, b: 'yes', c: false }, Boolean)).toBe(false);
  });
});
