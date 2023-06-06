import mapKey from '../../../mapKey.js';
describe('mapKey', () => {
  test('should return an object with keys mapped using the iteratee function', () => {
    const input = { a: 1, b: 2 };
    const iteratee = (value, key) => key + value;
    const expectedOutput = { a1: 1, b2: 2 };
    expect(mapKey(input, iteratee)).toEqual(expectedOutput);
  });

  test('should return an empty object if input object is empty', () => {
    const input = {};
    const iteratee = (value, key) => key + value;
    const expectedOutput = {};
    expect(mapKey(input, iteratee)).toEqual(expectedOutput);
  });

  test('should work with non-string keys', () => {
    const input = { 1: 'a', 2: 'b' };
    const iteratee = (value, key) => value + key;
    const expectedOutput = { a1: 'a', b2: 'b' };
    expect(mapKey(input, iteratee)).toEqual(expectedOutput);
  });

  test('should call iteratee with (value, key, object) arguments', () => {
    const input = { a: 1 };
    const iteratee = jest.fn();
    mapKey(input, iteratee);
    expect(iteratee).toHaveBeenCalledWith(1, 'a', input);
  });

  test('should not mutate the input object', () => {
    const input = { a: 1, b: 2 };
    const iteratee = (value, key) => key + value;
    mapKey(input, iteratee);
    expect(input).toEqual({ a: 1, b: 2 });
  });
});
