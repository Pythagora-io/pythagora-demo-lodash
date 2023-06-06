import split from '../../../split.js';

describe('split', () => {
  test("split('a-b-c', '-', 2)", () => {
    expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
  });

  test("split('a-b-c', '-', 0)", () => {
    expect(split('a-b-c', '-', 0)).toEqual([]);
  });

  test("split('a-b-c', '-', -1)", () => {
    expect(split('a-b-c', '-', -1)).toEqual(['a', 'b', 'c']);
  });

  test("split('a-b-c', '-', 5)", () => {
    expect(split('a-b-c', '-', 5)).toEqual(['a', 'b', 'c']);
  });

  test("split('', '-', 2)", () => {
    expect(split('', '-', 2)).toEqual(['']);
  });

  test("split('abc', '')", () => {
    expect(split('abc', '')).toEqual(['a', 'b', 'c']);
  });

  test("split('äåö', '', 2)", () => {
    expect(split('äåö', '', 2)).toEqual(['ä', 'å']);
  });

  test("split('abc', /-/) ", () => {
    expect(split('abc', /-/)).toEqual(['abc']);
  });

  test("split('a-b-c', /-/, 1) ", () => {
    expect(split('a-b-c', /-/, 1)).toEqual(['a']);
  });
});
