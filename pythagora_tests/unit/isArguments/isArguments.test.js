import isArguments from '../../../isArguments.js';

describe('isArguments', () => {
  test('should return true for arguments object', () => {
    expect(isArguments((function () { return arguments; })())).toBe(true);
  });

  test('should return false for array', () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  test('should return false for object', () => {
    expect(isArguments({})).toBe(false);
  });

  test('should return false for null', () => {
    expect(isArguments(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isArguments(undefined)).toBe(false);
  });

  test('should return false for string', () => {
    expect(isArguments('hello')).toBe(false);
  });

  test('should return false for number', () => {
    expect(isArguments(42)).toBe(false);
  });

  test('should return false for boolean', () => {
    expect(isArguments(true)).toBe(false);
  });
});
