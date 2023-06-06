import sortedLastIndexOf from "../../../sortedLastIndexOf.js";

describe("sortedLastIndexOf", () => {
  test("[4, 5, 5, 5, 6], 5", () => {
    expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toEqual(3);
  });

  test("[4, 5, 6], 7", () => {
    expect(sortedLastIndexOf([4, 5, 6], 7)).toEqual(-1);
  });

  test("[], 1", () => {
    expect(sortedLastIndexOf([], 1)).toEqual(-1);
  });

  test("[2, 3, 3, 3, 3], 3", () => {
    expect(sortedLastIndexOf([2, 3, 3, 3, 3], 3)).toEqual(4);
  });

  test("[2, 3, 4], 1", () => {
    expect(sortedLastIndexOf([2, 3, 4], 1)).toEqual(-1);
  });

  test("[1, 2, 2, 2], 2", () => {
    expect(sortedLastIndexOf([1, 2, 2, 2], 2)).toEqual(3);
  });

  test("null, 5", () => {
    expect(sortedLastIndexOf(null, 5)).toEqual(-1);
  });
});
