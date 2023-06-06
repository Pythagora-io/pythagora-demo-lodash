import matchesProperty from '../../../matchesProperty.js';

describe('matchesProperty', () => {
  test('test1', () => {
    const objects = [
      { a: 1, b: 2, c: 3 },
      { a: 4, b: 5, c: 6 }
    ];
    expect(objects.find(matchesProperty('a', 4))).toEqual({ a: 4, b: 5, c: 6 });
  });

  test('test2', () => {
    const objects = [
      { a: 'abc', b: { c: 6, d: 7 } },
      { a: 'xyz', b: { c: 3, d: { e: 8, f: 9 } } }
    ];
    expect(objects.find(matchesProperty('b.c', 3))).toEqual(objects[1]);
  });

  test('test3', () => {
    const objects = [
      { a: 'abc', b: { c: 6, d: 7 } },
      { a: 'xyz', b: { c: 3, d: { e: 8, f: 9 } } }
    ];
    expect(objects.find(matchesProperty(['b', 'c'], 6))).toEqual(objects[0]);
  });

  test('test4', () => {
    const objects = [
      { a: 'abc', b: { c: 6, d: 7 } },
      { a: 'xyz', b: { c: 3, d: { e: 8, f: 9 } } }
    ];
    expect(objects.find(matchesProperty('b.d.e', 8))).toEqual(objects[1]);
  });

  test('test5', () => {
    const objects = [
      { a: 'abc', b: { c: 6, d: 7 } },
      { a: 'xyz', b: { c: 3, d: { e: 8, f: 9 } } }
    ];
    expect(objects.find(matchesProperty('b.d.f', 10))).toEqual(undefined);
  });
});
