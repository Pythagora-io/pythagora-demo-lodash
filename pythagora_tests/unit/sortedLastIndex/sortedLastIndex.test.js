import sortedLastIndex from '../../../sortedLastIndex.js';
import baseSortedIndex from '../../../.internal/baseSortedIndex.js';

describe('sortedLastIndex', () => {

  test('[4, 5, 5, 5, 6], 5', () => {
    expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
  });

  test('[5, 5, 5, 5, 6], 5', () => {
    expect(sortedLastIndex([5, 5, 5, 5, 6], 5)).toBe(4);
  });

  test('[1, 2, 3, 4, 5], 4', () => {
    expect(sortedLastIndex([1, 2, 3, 4, 5], 4)).toBe(4);
  });

  test('[0, 0], 0', () => {
    expect(sortedLastIndex([0, 0], 0)).toBe(2);
  });

  test('[], 1', () => {
    expect(sortedLastIndex([], 1)).toBe(0);
  });

  test('[1], 1', () => {
    expect(sortedLastIndex([1], 1)).toBe(1);
  });

  test('Array with a symbol', () => {
    const symbol = Symbol(1);
    expect(baseSortedIndex([1, 2, symbol, 4], 3, true)).toBe(2);
  });

});
