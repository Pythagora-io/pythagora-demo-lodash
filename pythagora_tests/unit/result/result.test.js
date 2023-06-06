import result from '../../../result.js';

describe('result', () => {
  test('1', () => {
    const object = { a: [{ b: { c1: 3, c2: () => 4 } }] };
    expect(result(object, 'a[0].b.c1')).toBe(3);
  });

  test('2', () => {
    const object = { a: [{ b: { c1: 3, c2: () => 4 } }] };
    expect(result(object, 'a[0].b.c2')).toBe(4);
  });

  test('3', () => {
    const object = { a: [{ b: { c1: 3, c2: () => 4 } }] };
    expect(result(object, 'a[0].b.c3', 'default')).toBe('default');
  });

  test('4', () => {
    const object = { a: [{ b: { c1: 3, c2: () => 4 } }] };
    expect(result(object, 'a[0].b.c3', () => 'default')).toBe('default');
  });

  test('5', () => {
    const object = {};
    expect(result(object, '', 'empty')).toBe('empty');
  });

  test('6', () => {
    const object = { a: 5 };
    expect(result(object, 'a')).toBe(5);
  });

  test('7', () => {
    const object = { a: { b: 6 } };
    expect(result(object, 'a.b')).toBe(6);
  });

  test('8', () => {
    const object = { a: () => 7 };
    expect(result(object, 'a')).toBe(7);
  });

  test('9', () => {
    const object = { a: { b: () => 8 } };
    expect(result(object, 'a.b')).toBe(8);
  });

  test('10', () => {
    const object = null;
    expect(result(object, 'a.b.c', 'null')).toBe('null');
  });
});