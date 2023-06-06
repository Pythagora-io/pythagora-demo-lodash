import baseSortedIndexBy from "../../../.internal/baseSortedIndexBy.js";
import sortedIndexBy from "../../../sortedIndexBy.js";

describe("sortedIndexBy tests", () => {
  test("array with objects", () => {
    const objects = [{ n: 4 }, { n: 5 }];
    expect(sortedIndexBy(objects, { n: 4 }, ({ n }) => n)).toBe(0);
  });

  test("array with numbers", () => {
    const array = [2, 3, 5];
    expect(sortedIndexBy(array, 4, (v) => v)).toBe(2);
  });

  test("empty array", () => {
    const array = [];
    expect(sortedIndexBy(array, 42, (v) => v)).toBe(0);
  });

  test("null iteratee", () => {
    const array = [5, 8, 12];
    expect(() => {
      sortedIndexBy(array, 7, null);
    }).toThrow(TypeError);
  });

  test("undefined iteratee", () => {
    const array = [1, 4, 6];
    expect(() => {
      sortedIndexBy(array, 3, undefined);
    }).toThrow(TypeError);
  });
});
