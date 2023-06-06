import update from '../../../update.js';

describe('update', () => {
  test('1', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(update(object, 'a[0].b.c', n => n * n)).toEqual({ a: [{ b: { c: 9 } }] });
  });

  test('2', () => {
    const object = { a: [{ b: { c: 3 } }] };
    update(object, 'a[0].b.c', n => n * n);
    expect(object).toEqual({ a: [{ b: { c: 9 } }] });
  });

  test('3', () => {
    const object = { a: [{ b: { c: 3 } }] };
    update(object, 'x[0].y.z', n => (n ? n + 1 : 0));
    expect(object).toEqual({ a: [{ b: { c: 3 } }], x: [{ y: { z: 0 } }] });
  });

  test('4', () => {
    const object = null;
    expect(update(object, 'a[0].b.c', n => n * n)).toBe(null);
  });

  test('5', () => {
    const object = { a: [{ b: { c: '3' } }] };
    update(object, 'a[0].b.c', n => n + n);
    expect(object).toEqual({ a: [{ b: { c: '33' } }] });
  });
});