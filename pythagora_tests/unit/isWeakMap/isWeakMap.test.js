import isWeakMap from "../../../isWeakMap.js";

describe("isWeakMap", () => {
  test("WeakMap instance", () => {
    expect(isWeakMap(new WeakMap())).toBeTruthy();
  });

  test("Map instance", () => {
    expect(isWeakMap(new Map())).toBeFalsy();
  });

  test("Object instance", () => {
    expect(isWeakMap({})).toBeFalsy();
  });

  test("Array instance", () => {
    expect(isWeakMap([1, 2, 3])).toBeFalsy();
  });

  test("Function instance", () => {
    expect(isWeakMap(() => {})).toBeFalsy();
  });

  test("Set instance", () => {
    expect(isWeakMap(new Set())).toBeFalsy();
  });

  test("WeakSet instance", () => {
    expect(isWeakMap(new WeakSet())).toBeFalsy();
  });

  test("Date instance", () => {
    expect(isWeakMap(new Date())).toBeFalsy();
  });

  test("null", () => {
    expect(isWeakMap(null)).toBeFalsy();
  });

  test("undefined", () => {
    expect(isWeakMap(undefined)).toBeFalsy();
  });

  test("boolean", () => {
    expect(isWeakMap(true)).toBeFalsy();
    expect(isWeakMap(false)).toBeFalsy();
  });

  test("number", () => {
    expect(isWeakMap(42)).toBeFalsy();
  });

  test("string", () => {
    expect(isWeakMap("testing")).toBeFalsy();
  });

  test("Symbol instance", () => {
    expect(isWeakMap(Symbol())).toBeFalsy();
  });
});