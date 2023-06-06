import some from '../../../some.js';
describe('some', () => {
  test('should return true if any element passes the predicate check', () => {
    const array = [null, 0, 'yes', false];
    const predicate = Boolean;
    const result = some(array, predicate);
    expect(result).toBe(true);
  });

  test('should return false if no elements pass the predicate check', () => {
    const array = [null, 0, '', false];
    const predicate = Boolean;
    const result = some(array, predicate);
    expect(result).toBe(false);
  });

  test('should return false for an empty array', () => {
    const array = [];
    const predicate = Boolean;
    const result = some(array, predicate);
    expect(result).toBe(false);
  });

  test('should return false for a null array', () => {
    const array = null;
    const predicate = Boolean;
    const result = some(array, predicate);
    expect(result).toBe(false);
  });

  test('should work with a custom predicate function', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = (value) => value > 3;
    const result = some(array, predicate);
    expect(result).toBe(true);
  });

  test('should pass correct arguments to the predicate function', () => {
    const array = [1];
    const predicate = jest.fn();
    some(array, predicate);
    expect(predicate).toHaveBeenCalledWith(1, 0, array);
  });
});
