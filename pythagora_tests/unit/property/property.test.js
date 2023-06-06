import property from '../../../property.js';

describe('property', () => {
  test('test 1', () => {
    const objects = [
      { 'a': { 'b': 2 } },
      { 'a': { 'b': 1 } }
    ];
    expect(objects.map(property('a.b'))).toEqual([2, 1]);
  });

  test('test 2', () => {
    const objects = [
      { 'a': { 'b': { 'c': 3 } } },
      { 'a': { 'b': { 'c': 4 } } }
    ];
    expect(objects.map(property(['a', 'b', 'c']))).toEqual([3, 4]);
  });

  test('test 3', () => {
    const objects = [
      { 'a': { 'b': { 'c': null } } },
      { 'a': { 'b': { } } }
    ];
    expect(objects.map(property('a.b.c'))).toEqual([null, undefined]);
  });

  test('test 4', () => {
    const objects = [
      { 'a': { 'b': 5 } },
      { 'a': { 'b': 6 } }
    ];
    expect(objects.map(property('a.b'))).not.toEqual([6, 5]);
  });

  test('test 5', () => {
    const objects = [
      { 'a': { 'b': { 'c': { 'd': 7 } } } },
      { 'a': { 'b': { 'c': { 'd': 8 } } } }
    ];
    expect(objects.map(property(['a', 'b', 'c', 'd']))).toEqual([7, 8]);
  });
});
