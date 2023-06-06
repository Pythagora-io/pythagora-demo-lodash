import forOwnRight from '../../../forOwnRight.js';
describe('forOwnRight', () => {
  test('should call iteratee in reverse order', () => {
    const Foo = function() {
      this.a = 1;
      this.b = 2;
    };

    Foo.prototype.c = 3;

    const result = [];
    const iteratee = (value, key) => {
      result.push(key);
    }

    forOwnRight(new Foo, iteratee);

    expect(result).toEqual(['b', 'a']);
  });

  test('should not call iteratee for inherited properties', () => {
    const Foo = function() {
      this.a = 1;
      this.b = 2;
    };

    Foo.prototype.c = 3;

    const spy = jest.fn();

    forOwnRight(new Foo, spy);

    expect(spy).toHaveBeenCalledTimes(2);
  });

  test('should handle null input', () => {
    let called = false;
    const iteratee = () => {
      called = true;
    }

    forOwnRight(null, iteratee);

    expect(called).toBe(false);
  });

  test('should handle undefined input', () => {
    let called = false;
    const iteratee = () => {
      called = true;
    }

    forOwnRight(undefined, iteratee);

    expect(called).toBe(false);
  });
});
