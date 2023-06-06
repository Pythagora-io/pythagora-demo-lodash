import flatMap from '../../../flatMap.js';
describe('flatMap', () => {
  test('flatMap([[1, 2], [3, 4]], value => value)', () => {
    expect(flatMap([[1, 2],3, 4], value => value)).toEqual([1, 2, 3, 4]);
  });

  test('flatMap([1, 2], n => [n, n])', () => {
    expect(flatMap([1, 2], n => [n, n])).toEqual([1, 1, 2, 2]);
  });

  test('flatMap([null, undefined], value => value)', () => {
    expect(flatMap([null, undefined], value => value)).toEqual([null, undefined]);
  });

  test('flatMap([], value => value)', () => {
    expect(flatMap([], value => value)).toEqual([]);
  });

  test('flatMap("string", value => value)', () => {
    expect(flatMap("string", value => value)).toEqual([...'string']);
  });
});
