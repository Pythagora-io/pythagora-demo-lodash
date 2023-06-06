import intersectionBy from '../../../intersectionBy.js';

describe('intersectionBy', () => {

test('1', () => {
  const array1 = [2.1, 1.2];
  const array2 = [2.3,3.4];
  const expected = [2.1];
  expect(intersectionBy(array1, array2, Math.floor)).toEqual(expected);
});

test('2', () => {
  const array1 = [1, 2, 3, 4];
  const array2 = [4, 4, 8, 9];
  const array3 = [4, 3, 2, 1];
  const expected = [4];
  expect(intersectionBy(array1, array2, array3, Math.floor)).toEqual(expected);
});

test('3', () => {
  const array1 = [1.1, 2.2, 3.3];
  const array2 = [2, 3, 4];
  const expected = [2.2, 3.3];
  expect(intersectionBy(array1, array2, Math.floor)).toEqual(expected);
});

test('4', () => {
  const array1 = [];
  const array2 = [2, 3, 4];
  const expected = [];
  expect(intersectionBy(array1, array2, Math.floor)).toEqual(expected);
});

});
