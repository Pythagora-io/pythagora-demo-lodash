import pullAt from '../../../pullAt.js';
import map from '../../../map.js';

describe('pullAt', () => {

  test('[1, 2, 3], [0, 2]', () => {
    const array = [1, 2, 3];
    expect(pullAt(array, 0, 2)).toEqual([1, 3]);
  });

  test('[1, 2, 3], [0]', () => {
    const array = [1, 2, 3];
    expect(pullAt(array, 0)).toEqual([1]);
  });

  test('null, [0]', () => {
    const array = null;
    expect(pullAt(array, 0)).toEqual([undefined]);
  });

  test('[1, 2, 3], [3]', () => {
    const array = [1, 2, 3];
    expect(pullAt(array, 3)).toEqual([undefined]);
  });

  test('Undefined Array', () => {
    const array = undefined;
    expect(pullAt(array, 0)).toEqual([undefined]);
  });
});
