import differenceBy from '../../../differenceBy.js';
describe('differenceBy', () => {
  test('differenceBy([2.1, 1.2], [2.3, 3.4],.floor)', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  });

  test('differenceBy([], [2.3, 3.4], Math.floor)', () => {
    expect(differenceBy([], [2.3, 3.4], Math.floor)).toEqual([]);
  });

  test('differenceBy([2.1, 1.2], [], Math.floor)', () => {
    expect(differenceBy([2.1, 1.2], [], Math.floor)).toEqual([2.1, 1.2]);
  });

  test('differenceBy([2.1, 1.2], [2.3, 3.4])', () => {
    expect(differenceBy([2.1, 1.2], [2.3, 3.4])).toEqual([2.1, 1.2]);
  });

  test('differenceBy([2.1, 1.2], [2.2, 3.4], (n) => n * 2)', () => {
    expect(differenceBy([2.1, 1.2], [2.2, 3.4], (n) => n * 2)).toEqual([2.1, 1.2]);
  });

  test('differenceBy(["apple", "banana", "cherry"], ["banana", "apple", "grape"], (s) => s.length)', () => {
    expect(differenceBy(["apple", "banana", "cherry"], ["banana", "apple", "grape"], (s) => s.length)).toEqual([]);
  });
});
