import sortedLastIndexBy from '../../../sortedLastIndexBy.js';

describe('sortedLastIndexBy', () => {
  test('1', () => {
    expect(sortedLastIndexBy([{n: 4}, {n: 5}], {n: 4}, ({n}) => n)).toEqual(1);
  });

  test('2', () => {
    expect(sortedLastIndexBy([{n: 4}, {n: 5}, {n: 6}], {n: 5}, ({n}) => n)).toEqual(2);
  });

  test('3', () => {
    expect(sortedLastIndexBy([{n: 3}], {n: 2}, ({n}) => n)).toEqual(0);
  });

  test('4', () => {
    expect(sortedLastIndexBy([{n: 1}, {n: 2}, {n: 3}], {n: 1}, ({n}) => n)).toEqual(1);
  });

  test('5', () => {
    expect(sortedLastIndexBy([{n: 10}, {n: 15}, {n: 20}, {n: 25}], {n: 20}, ({n}) => n)).toEqual(3);
  });

  test('6', () => {
    expect(sortedLastIndexBy([], {n: 1}, ({n}) => n)).toEqual(0);
  });

  test('7', () => {
    const array = Array.from({length: 20}, (_, i) => ({n: i+1}));
    const obj = {n: 15};
    expect(sortedLastIndexBy(array, obj, ({n}) => n)).toEqual(15);
  });
});
