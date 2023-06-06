import conformsTo from '../../../conformsTo.js';
describe('conformsTo', () => {
  test('conformsTo({ a: 1, b: 2 }, { b: n => n > 1 })', () => {
    expect(conformsTo({ a: 1, b: 2 }, { b: n => n > 1 })).toBe(true);
  });

  test('conformsTo({ a: 1, b: 2 }, { b: n => n > 2 })', () => {
    expect(conformsTo({ a: 1, b: 2 }, { b: n => n > 2 })).toBe(false);
  });

  test('conformsTo(null, { b: n => n > 1 })', () => {
    expect(conformsTo(null, { b: n => n > 1 })).toBe(false);
  });

  test('conformsTo(undefined, { b: n => n > 1 })', () => {
    expect(conformsTo(undefined, { b: n => n > 1 })).toBe(false);
  });

  test('conformsTo("hi", { 0: c => c === "h" })', () => {
    expect(conformsTo("hi", { 0: c => c === "h" })).toBe(true);
  });

  test('conformsTo([1, 2, 3], { 0: n => n === 1 })', () => {
    expect(conformsTo([1, 2, 3], { 0: n => n === 1 })).toBe(true);
  });

  test('conformsTo([])', () => {
    expect(conformsTo([], {})).toBe(true);
  });

  test('conformsTo({}, {})', () => {
    expect(conformsTo({}, {})).toBe(true);
  });
});
