import pick from '../../../pick.js';

describe('pick', () => {
  test('pick({"a": 1, "b": "2", "c": 3}, "a", "c")', () => {
    expect(pick({"a": 1, "b": "2", "c": 3}, "a", "c")).toEqual({"a": 1, "c": 3});
  });

  test('pick(null, ["a", "c"])', () => {
    expect(pick(null, ["a", "c"])).toEqual({});
  });

  test('pick(undefined, ["a", "c"])', () => {
    expect(pick(undefined, ["a", "c"])).toEqual({});
  });

  test('pick({}, ["a", "c"])', () => {
    expect(pick({}, ["a", "c"])).toEqual({});
  });

  test('pick({"a": 1, "b": "2", "c": 3}, [])', () => {
    expect(pick({"a": 1, "b": "2", "c": 3}, [])).toEqual({});
  });

  test('pick({}, [])', () => {
    expect(pick({}, [])).toEqual({});
  });

  test('pick({"a": 1, "b": "2", "c": 3}, ["b"])', () => {
    expect(pick({"a": 1, "b": "2", "c": 3}, ["b"])).toEqual({"b": "2"});
  });

  test('pick({"a": 1, "b": {"c": 2, "d": 3}}, "b.c")', () => {
    expect(pick({"a": 1, "b": {"c": 2, "d": 3}}, "b.c")).toEqual({"b": {"c": 2}});
  });

  test('pick({"a": 1, "b": {"c": 2, "d": 3}}, "b")', () => {
    expect(pick({"a": 1, "b": {"c": 2, "d": 3}}, "b")).toEqual({"b": {"c": 2, "d": 3}});
  });

  test('pick({"a": 1, "b": "2", "c": 3}, "a", "c", "d")', () => {
    expect(pick({"a": 1, "b": "2", "c": 3}, "a", "c", "d")).toEqual({"a": 1, "c": 3});
  });
});
