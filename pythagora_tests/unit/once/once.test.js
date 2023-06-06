import once from '../../../once.js';

describe('once', () => {
  test('Executes function once', () => {
    let counter = 0;
    const inc = () => counter++;
    const incOnce = once(inc);
    incOnce();
    incOnce();
    expect(counter).toBe(1);
  });

  test('Returns value of first call', () => {
    const identity = (x) => x;
    const identityOnce = once(identity);
    expect(identityOnce('test')).toBe('test');
    expect(identityOnce('fail')).toBe('test');
  });

  test('Preserves this context', () => {
    const obj = {
      x: 10,
      getXOnce: once(function () {
        return this.x;
      }),
    };
    expect(obj.getXOnce()).toBe(10);
    obj.x = 20;
    expect(obj.getXOnce()).toBe(10);
  });

  test('Throws when given non-function parameter', () => {
    expect(() => {
      once(42);
    }).toThrow(TypeError);
  });
});