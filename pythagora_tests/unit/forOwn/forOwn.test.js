import forOwn from '../../../forOwn.js';
describe('forOwn', () => {
  test('should invoke iteratee function for each property', () => {
    const object = {a: 1, b: 2};
    const mockIteratee = jest.fn();
    forOwn(object, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledTimes(2);
  });

  test('should provide correct iteratee arguments', () => {
    const object = {a: 1, b: 2};
    const mockIteratee = jest.fn();
    forOwn(object, mockIteratee);
    expect(mockIteratee).toHaveBeenNthCalledWith(1, 1, 'a', object);
    expect(mockIteratee).toHaveBeenNthCalledWith(2, 2, 'b', object);
  });

  test('should not iterate prototype properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const obj = new Foo();
    const mockIteratee = jest.fn();
    forOwn(obj, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledTimes(2);
  });

  test('should handle empty object', () => {
    const object = {};
    const mockIteratee = jest.fn();
    forOwn(object, mockIteratee);
    expect(mockIteratee).toHaveBeenCalledTimes(0);
  });
});
