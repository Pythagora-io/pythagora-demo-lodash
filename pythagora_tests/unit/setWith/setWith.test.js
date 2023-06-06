import setWith from "../../../setWith.js";

describe("setWith", () => {
  test("1", () => {
    const obj = {};
    expect(setWith(obj, "[0][1]", "a", Object)).toEqual({ "0": { "1": "a" } });
  });

  test("2", () => {
    const obj = {};
    expect(setWith(obj, "a.b.c", "value")).toEqual({ a: { b: { c: "value" } } });
  });

  test("3", () => {
    const obj = { a: { b: { c: 1 } } };
    expect(setWith(obj, "a.b.c", 2)).toEqual({ a: { b: { c: 2 } } });
  });

  test("4", () => {
    const obj = { a: { b: { c: [1, 2, 3] } } };
    expect(setWith(obj, "a.b.c[1]", 4)).toEqual({ a: { b: { c: [1, 4, 3] } } });
  });

  test("5", () => {
    const obj = { a: { b: [1, 2, 3] } };
    expect(setWith(obj, "a.b[1]", 4)).toEqual({ a: { b: [1, 4, 3] } });
  });
});
