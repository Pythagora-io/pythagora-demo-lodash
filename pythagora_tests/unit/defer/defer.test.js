import defer from '../../../defer.js';
describe('defer', () => {
  test('should call provided function after timeout', done => {
    const mockFn = jest.fn();
    defer(mockFn);
    expect(mockFn).not.toBeCalled();
    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      done();
    }, 10);
  });

  test('should pass provided arguments to function', done => {
    const mockFn = jest.fn();
    defer(mockFn, 'arg1', 'arg2');
    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
      done();
    }, 50);
  });

  test('should throw type error when non-function is provided', () => {
    expect(() => {
      defer('not a function');
    }).toThrow(TypeError);
  });
});
