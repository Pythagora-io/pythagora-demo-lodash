import after from '../../../after.js';
describe('after', () => {
  test('should invoke func only after n calls', () => {
    const mockFn = jest.fn(() => 'done saving!');
    const done = after(2, mockFn);

    done();
    expect(mockFn).not.toHaveBeenCalled();

    done();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('should throw TypeError if func is not a function', () => {
    expect(() => after(1, 'not a function')).toThrow(TypeError);
  });

  test('should not throw error if n is not provided', () => {
    const mockFn = jest.fn(() => 'done');
    const done = after(undefined, mockFn);

    done();
    expect(mockFn).toHaveBeenCalled();
  });

  test('should return undefined if called less than n times', () => {
    const done = after(3, () => 'done saving!');

    expect(done()).toBeUndefined();
    expect(done()).toBeUndefined();
  });

  test('should invoke func with the correct context and arguments', () => {
    const context = { value: 'test' };
    const mockFn = jest.fn(function () {
      return this.value;
    });
    const done = after(1, mockFn);

    expect(done.call(context, 'arg1', 'arg2')).toBe('test');
    expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  });

});
