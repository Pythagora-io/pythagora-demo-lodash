import hasPathIn from '../../../hasPathIn.js';

describe('hasPathIn', () => {
  test('should return true for a valid path in the object', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, 'a.b')).toBe(true);
  });

  test('should return true for a valid path using an array', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, ['a', 'b'])).toBe(true);
  });

  test('should return false for an invalid path', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, 'a.c')).toBe(false);
  });

  test('should return false for an invalid path using an array', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, ['a', 'c'])).toBe(false);
  });

  test('should return false for a null object', () => {
    const object = null;
    expect(hasPathIn(object, 'a.b')).toBe(false);
  });

  test('should return false for an undefined object', () => {
    const object = undefined;
    expect(hasPathIn(object, 'a.b')).toBe(false);
  });

  test('should return true for a valid nested array path', () => {
    const object = { 'a': { 'b': [1, 2, 3] } };
    expect(hasPathIn(object, 'a.b[1]')).toBe(true);
  });

  test('should return false for an invalid nested array path', () => {
    const object = { 'a': { 'b': [1, 2, 3] } };
    expect(hasPathIn(object, 'a.b[3]')).toBe(false);
  });

  test('should return false for an empty string path', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, '')).toBe(false);
  });

  test('should return false for an empty array path', () => {
    const object = { 'a': { 'b': 2 } };
    expect(hasPathIn(object, [])).toBe(false);
  });
});
