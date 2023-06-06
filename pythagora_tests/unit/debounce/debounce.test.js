import debounce from '../../../debounce.js';
import isObject from '../../../isObject.js';
describe('debounce', () => {
  test('should debounce a function', (done) => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32);

    debounced();
    debounced();
    debounced();

    setTimeout(debounced, 128);

    setTimeout(() => {
      expect(counter).toBe(2);
      debounced();
    }, 192);

    setTimeout(() => {
      expect(counter).toBe(3);
      done();
    }, 290);
  });

  test('should not trigger leading callback', (done) => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32, { 'leading': false });

    debounced();
    debounced();

    setTimeout(() => {
      expect(counter).toBe(1);
      done();
    }, 96);
  });

  test('should trigger leading and trailing callback', (done) => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32, { 'leading': true });

    debounced();
    debounced();

    setTimeout(() => {
      expect(counter).toBe(2);
      done();
    }, 96);
  });

  test('should cancel delayed debounced invocation', () => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32);

    debounced();
    debounced.cancel();

    setTimeout(() => {
      expect(counter).toBe(0);
    }, 96);
  });

  test('should invoke debounced immediately when flush is called', () => {
    let counter = 0;
    let value;
    const debounced = debounce(function() { counter++; return 1; }, 32);

    debounced();
    debounced();

    value = debounced.flush();

    expect(counter).toBe(1);
    expect(value).toBe(1);
  });

  test('should return true if debounced has pending invocations', () => {
    const debounced = debounce(() => {}, 32, { 'leading': false });

    debounced();

    expect(debounced.pending()).toBe(true);
  });

  test('should throw TypeError if debounce is not a function', () => {
    expect(() => debounce('not a function', 32)).toThrow(TypeError);
  });

  test('should pass through non-object options argument', () => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32, 'string');

    debounced();
    debounced();

    setTimeout(() => {
      expect(counter).toBe(1);
    }, 96);
  });

  test('should work with debounce usage of `leading` without `trailing`', () => {
    let counter = 0;
    const debounced = debounce(function() { counter++; }, 32, { 'leading': true, 'trailing': false });

    debounced();
    debounced();

    setTimeout(() => {
      expect(counter).toBe(1);
    }, 96);
  });

  test('isObject should return true for objects and functions', () => {
    const object = { 'a': 1 };
    const func = function() { return 'test'; };
    expect(isObject(object)).toBe(true);
    expect(isObject(func)).toBe(true);
  });

  test('isObject should return false for null and other primitive types', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
  });
});
