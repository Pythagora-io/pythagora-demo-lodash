import method from '../../../method.js';
import invoke from '../../../invoke.js';

describe('method', () => {
  test('method with string path', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];
    const result = objects.map(method('a.b'));
    expect(result).toEqual([2, 1]);
  });

  test('method with array path', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];
    const result = objects.map(method(['a', 'b']));
    expect(result).toEqual([2, 1]);
  });

  test('method with non-existent path', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];
    const result = objects.map(method('a.c'));
    expect(result).toEqual([undefined, undefined]);
  });

  test('method with empty path', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } }
    ];
    const result = objects.map(method(''));
    expect(result).toEqual([undefined, undefined]);
  });

  test('method with arguments', () => {
    const objects = [
      { 'a': { 'b': (x) => x * 2 } },
      { 'a': { 'b': (x) => x * 3 } }
    ];
    const result = objects.map(method('a.b', [2]));
    expect(result).toEqual([4, 6]);
  });

  test('method with empty object', () => {
    const objects = [
      { 'a': { 'b': () => 2 } },
      { 'a': { 'b': () => 1 } },
      {}
    ];
    const result = objects.map(method('a.b'));
    expect(result).toEqual([2, 1, undefined]);
  });
});
