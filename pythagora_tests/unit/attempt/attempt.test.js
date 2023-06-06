import attempt from '../../../attempt.js';
import isError from '../../../isError.js';
describe('attempt', () => {
  test('should return function result when no error is thrown', () => {
    const expectedResult = 6;
    const result = attempt((a, b) => a + b, 2, 4);
    expect(result).toBe(expectedResult);
  });

  test('should return an error object when error is thrown', () => {
    const result = attempt(() => {
      throw new Error('Test error');
    });
    expect(isError(result)).toBe(true);
  });

  test('should return the caught error object if isError is true', () => {
    const errorObject = new Error('Test error');
    const result = attempt(() => {
      throw errorObject;
    });
    expect(result).toBe(errorObject);
  });

  test('should return a new error object if isError is false', () => {
    const customError = { message: 'Test error', name: 'CustomError' };
    const result = attempt(() => {
      throw customError;
    });
    expect(result).not.toBe(customError);
    expect(isError(result)).toBe(true);
  });

  test('should call the function with the provided arguments', () => {
    const mockFn = jest.fn((a, b) => a * b);
    attempt(mockFn, 3, 5);
    expect(mockFn).toHaveBeenCalledWith(3, 5);
  });

  test('should not call the function if it is not a function', () => {
    const notFunction = 'not a function';
    const result = attempt(notFunction);
    expect(isError(result)).toBe(true);
  });
});
