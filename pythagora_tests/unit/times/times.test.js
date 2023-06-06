import times from '../../../times.js';
describe("times function tests", () => {
  test("times with positive integer n and String conversion", () => {
    const result = times(3, String);
    expect(result).toEqual(['0', '1', '2']);
  });

  test("times with n = 4 and constant 0", () => {
    const result = times(4, () => 0);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  test("times with n = 0", () => {
    const result = times(0, (index) => index * 2);
    expect(result).toEqual([]);
  });

  test("times with negative integer n", () => {
    const result = times(-5, (index) => index * 2);
    expect(result).toEqual([]);
  });
});
