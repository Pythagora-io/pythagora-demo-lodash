import forEach from '../../../forEach.js';

describe('forEach', () => {
  test('forEach with an array of numbers', () => {
    const input = [1, 2, 3];
    const mockIteratee = jest.fn();

    forEach(input, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(input.length);
    expect(mockIteratee.mock.calls[0]).toEqual([1, 0, input]);
    expect(mockIteratee.mock.calls[1]).toEqual([2, 1, input]);
    expect(mockIteratee.mock.calls[2]).toEqual([3, 2, input]);
  });

  test('forEach with an object', () => {
    const input = { a: 1, b: 2 };
    const mockIteratee = jest.fn();

    forEach(input, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(Object.keys(input).length);
    expect(mockIteratee.mock.calls[0]).toEqual([1, 'a', input]);
    expect(mockIteratee.mock.calls[1]).toEqual([2, 'b', input]);
  });

  test('forEach with an empty array', () => {
    const input = [];
    const mockIteratee = jest.fn();

    forEach(input, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
  });

  test('forEach with an empty object', () => {
    const input = {};
    const mockIteratee = jest.fn();

    forEach(input, mockIteratee);

    expect(mockIteratee).not.toHaveBeenCalled();
  });

  test('forEach with iteration exit early', () => {
    const input = [1, 2, 3];
    const iteratee = (value, index) => {
      if (index === 1) {
        return false;
      }
    };
    const mockIteratee = jest.fn(iteratee);

    forEach(input, mockIteratee);

    expect(mockIteratee).toHaveBeenCalledTimes(2);
    expect(mockIteratee.mock.calls[0]).toEqual([1, 0, input]);
    expect(mockIteratee.mock.calls[1]).toEqual([2, 1, input]);
  });
});
