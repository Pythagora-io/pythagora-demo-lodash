import unionBy from '../../../unionBy.js';

describe('unionBy', () => {
  test('1', () => {
    expect(unionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1, 1.2, 3.4]);
  });

  test('2', () => {
    expect(unionBy([], [], Math.floor)).toEqual([]);
  });

  test('3', () => {
    expect(unionBy([1], [], Math.floor)).toEqual([1]);
  });
});
