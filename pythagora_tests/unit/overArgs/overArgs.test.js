import overArgs from '../../../overArgs.js';

describe('overArgs test suite', () => {
  test('Test basic usage with squared and doubled functions', () => {
    const doubled = n => n * 2;
    const square = n => n * n;
    const func = overArgs((x, y) => [x, y], [square, doubled]);

    expect(func(9, 3)).toEqual([81, 6]);
    expect(func(10, 5)).toEqual([100, 10]);
  });

  test('Test with more arguments than transforms', () => {
    const doubled = n => n * 2;
    const square = n => n * n;
    const func = overArgs((x, y, z) => [x, y, z], [square, doubled]);

    expect(func(9, 3, 4)).toEqual([81, 6, 4]);
  });

  test('Test with less arguments than transforms', () => {
    const doubled = n => n * 2;
    const square = n => n * n;
    const func = overArgs((x, y) => [x, y], [square, doubled, square]);

    expect(func(9, 3)).toEqual([81, 6]);
  });

  test('Test with empty transforms array', () => {
    const func = overArgs((x, y) => [x, y], []);

    expect(func(3, 5)).toEqual([3, 5]);
  });
});
