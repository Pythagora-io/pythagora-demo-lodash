import set from '../../../set.js';
describe('set', () => {
  test('basic', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    set(obj, 'a[0].b.c', 4);
    expect(obj.a[0].b.c).toBe(4);
  });

  test('nested', () => {
    const obj = {};
    set(obj, ['x', '0', 'y', 'z'], 5);
    expect(obj.x[0].y.z).toBe(5);
  });

  test('numberInStringIndex', () => {
    const obj = {};
    set(obj, 'x.0.y.z', 6);
    expect(obj.x[0].y.z).toBe(6);
  });

  test('nullObject', () => {
    const result = set(null, 'a.b.c', 7);
    expect(result).toBeNull();
  });

  test('undefinedObject', () => {
    const result = set(undefined, 'a.b.c', 8);
    expect(result).toBeUndefined();
  });

  test('nonObject', () => {
    const obj = 42;
    const result = set(obj, 'a.b.c', 9);
    expect(result).toBe(obj);
  });

  test('emptyPath', () => {
    const obj = { a: { b: { c: 10 } } };
    set(obj, '', 11);
    expect(obj).toMatchObject({ a: { b: { c: 10 } } });
  });

  test('emptyArrayPath', () => {
    const obj = { a: { b: { c: 12 } } };
    set(obj, [], 13);
    expect(obj).toMatchObject({ a: { b: { c: 12 } } });
  });
});
