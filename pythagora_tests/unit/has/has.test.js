import has from '../../../has.js';
describe('has', () => {
  test('has(object, key) - key exists', () => {
    const object = { a: { b: 2 } };
    expect(has(object, 'a')).toBe(true);
  });

  test('has(object, key) - key does not exist', () => {
    const object = { a: { b: 2 } };
    expect(has(object, 'c')).toBe(false);
  });

  test('has(object, key) - empty object', () => {
    const object = {};
    expect(has(object, 'a')).toBe(false);
  });

  test('has(object, key) - object is null', () => {
    const object = null;
    expect(has(object, 'a')).toBe(false);
  });

  test('has(object, key) - object is undefined', () => {
    const object = undefined;
    expect(has(object, 'a')).toBe(false);
  });
});
