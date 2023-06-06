import chunk from '../../../chunk.js';
describe('chunk', () => {
  test('regularInput1', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('regularInput2', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('sizeZero', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
  });

  test('sizeLessThanZero', () => {
    expect(chunk(['a', 'b', 'c', 'd'], -1)).toEqual([]);
  });

  test('sizeFloat', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2.5)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('sizeGreaterArrayLength', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 5)).toEqual([['a', 'b', 'c', 'd']]);
  });

  test('emptyArray', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('sizeNotProvided', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
  });
});
