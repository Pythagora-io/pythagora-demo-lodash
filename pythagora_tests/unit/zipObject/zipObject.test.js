import zipObject from '../../../zipObject.js';

describe('zipObject', () => {
  test('test1', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toEqual({ 'a': 1, 'b': 2 });
  });

  test('test2', () => {
    expect(zipObject([], [])).toEqual({});
  });

  test('test3', () => {
    expect(zipObject(['a'], [])).toEqual({ 'a': undefined });
  });

  test('test4', () => {
    expect(zipObject([], [1])).toEqual({});
  });

  test('test5', () => {
    expect(zipObject(['a', 'b'], [1])).toEqual({ 'a': 1, 'b': undefined });
  });

  test('test6', () => {
    expect(zipObject(['a', undefined], [1])).toEqual({ 'a': 1, 'undefined': undefined });
  });

  test('test7', () => {
    expect(zipObject([null, 'b'], ['foo', 2])).toEqual({ 'null': 'foo', 'b': 2 });
  });

  test('test8', () => {
    expect(zipObject([undefined, 'b'], ['foo', 2])).toEqual({ 'undefined': 'foo', 'b': 2 });
  });
});
