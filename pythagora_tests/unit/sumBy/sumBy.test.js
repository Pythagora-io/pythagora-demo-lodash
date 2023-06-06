import sumBy from "../../../sumBy.js";

describe("sumBy", () => {
  test("sumBy with iteratee", () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(sumBy(objects, ({ n }) => n)).toBe(20);
  });

  test("sumBy with empty array", () => {
    expect(sumBy([], (value) => value)).toBe(0);
  });

  test("sumBy with null array", () => {
    expect(sumBy(null, (value) => value)).toBe(0);
  });

  test("sumBy with undefined array", () => {
    expect(sumBy(undefined, (value) => value)).toBe(0);
  });

  test("sumBy with custom iteratee", () => {
    const objects = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    expect(sumBy(objects, ({ n }) => n * 2)).toBe(40);
  });

  test("sumBy with negative values", () => {
    const objects = [{ n: -4 }, { n: 2 }, { n: 8 }, { n: -6 }];
    expect(sumBy(objects, ({ n }) => n)).toBe(0);
  });

  test("sumBy with decimal values", () => {
    const objects = [{ n: 4.5 }, { n: 2.3 }, { n: 8.1 }, { n: 6.7 }];
    expect(sumBy(objects, ({ n }) => n)).toBeCloseTo(21.6);
  });

  test("sumBy with empty object", () => {
    const objects = [{ n: 4 }, { n: 2 }, {}, { n: 6 }];
    expect(sumBy(objects, ({ n }) => n)).toBe(12);
  });

  test("sumBy with no matching properties", () => {
    const objects = [{ a: 4 }, { b: 2 }, { c: 8 }, { d: 6 }];
    expect(sumBy(objects, ({ n }) => n)).toBeUndefined();
  });
});
