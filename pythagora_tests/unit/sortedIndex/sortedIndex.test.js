import sortedIndex from '../../../sortedIndex.js';

describe('sortedIndex', () => {
  test('sortedIndex([30, 50], 40)', () => {
    expect(sortedIndex([30, 50], 40)).toBe(1);
  });

  test('sortedIndex([], 1)', () => {
    expect(sortedIndex([], 1)).toBe(0);
  });

  test('sortedIndex([30, 50], 30)', () => {
    expect(sortedIndex([30, 50], 30)).toBe(0);
  });

  test('sortedIndex([30, 50], 50)', () => {
    expect(sortedIndex([30, 50], 50)).toBe(1);
  });

  test('sortedIndex([30, 50], 60)', () => {
    expect(sortedIndex([30, 50], 60)).toBe(2);
  });

  test('sortedIndex([-50, -30], -40)', () => {
    expect(sortedIndex([-50, -30], -40)).toBe(1);
  });

  test('sortedIndex([-50, -30], -50)', () => {
    expect(sortedIndex([-50, -30], -50)).toBe(0);
  });
  
  test('sortedIndex([-50, -30], -30)', () => {
    expect(sortedIndex([-50, -30], -30)).toBe(1);
  });

  test('sortedIndex([1, 2, 3], 2.5)', () => {
    expect(sortedIndex([1, 2, 3], 2.5)).toBe(2);
  });
});