import isError from '../../../isError.js';
describe('isError', () => {
  test('returns true for Error objects', () => {
    expect(isError(new Error())).toBe(true);
  });

  test('returns false for Error constructor', () => {
    expect(isError(Error)).toBe(false);
  });

  test('returns false for non-error objects', () => {
    expect(isError({})).toBe(false);
  });

  test('returns true for other Error object types', () => {
    expect(isError(new RangeError())).toBe(true);
    expect(isError(new TypeError())).toBe(true);
    expect(isError(new ReferenceError())).toBe(true);
    expect(isError(new SyntaxError())).toBe(true);
  });

  test('returns false for plain objects with message and name properties', () => {
    expect(isError({ message: 'error', name: 'CustomError' })).toBe(false);
  });

  test('returns false for null', () => {
    expect(isError(null)).toBe(false);
  });

  test('returns false for undefined', () => {
    expect(isError(undefined)).toBe(false);
  });
});
