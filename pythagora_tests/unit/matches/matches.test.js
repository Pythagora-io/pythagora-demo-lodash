import matches from '../../../matches.js';
import filter from '../../../filter.js';
describe('matches', () => {
  test('should pass for matching simple object', () => {
    const matchesFunc = matches({ a: 1, b: 2 });
    expect(matchesFunc({ a: 1, b: 2, c: 3 })).toBeTruthy();
  });

  test('should fail for non-matching simple object', () => {
    const matchesFunc = matches({ a: 1, b: 2 });
    expect(matchesFunc({ a: 1, b: 3, c: 3 })).toBeFalsy();
  });

  test('should pass for matching complex object', () => {
    const matchesFunc = matches({ a: { b: 2, c: [1, 2] } });
    expect(matchesFunc({ a: { b: 2, c: [1, 2], d: 4 }, e: 5 })).toBeTruthy();
  });

  test('should fail for non-matching complex object', () => {
    const matchesFunc = matches({ a: { b: 2, c: [1, 2] } });
    expect(matchesFunc({ a: { b: 2, c: [1, 3], d: 4 }, e: 5 })).toBeFalsy();
  });

  test('should pass for matching objects with circular references', () => {
    const circularObj = { a: 1 };
    circularObj.circular = circularObj;
    const matchesFunc = matches(circularObj);
    const circularObj2 = { a: 1 };
    circularObj2.circular = circularObj2;
    expect(matchesFunc(circularObj2)).toBeTruthy();
  });

  test('should pass for matching objects with different but equal values', () => {
    const matchesFunc = matches({ a: new Date(2022, 1, 1), b: /[a-zA-Z]/ });
    const targetObj = { a: new Date(2022, 1, 1), b: /[a-zA-Z]/, c: 3 };
    expect(matchesFunc(targetObj)).toBeTruthy();
  });

  test('should fail for matching objects with different and inequal values', () => {
    const matchesFunc = matches({ a: new Date(2022, 1, 1), b: /[a-zA-Z]/ });
    const targetObj = { a: new Date(2022, 2, 1), b: /[0-9]/, c: 3 };
    expect(matchesFunc(targetObj)).toBeFalsy();
  });

  test('should pass for matching objects with nested arrays', () => {
    const matchesFunc = matches({ a: [1, 2, [3, 4]] });
    expect(matchesFunc({ a: [1, 2, [3, 4]], b: 5 })).toBeTruthy();
  });

  test('should fail for non-matching objects with nested arrays', () => {
    const matchesFunc = matches({ a: [1, 2, [3, 4]] });
    expect(matchesFunc({ a: [1, 2, [3, 5]], b: 5 })).toBeFalsy();
  });

  test('should pass for matching objects with symbols', () => {
    const symbolA = Symbol('a');
    const symbolB = Symbol('b');
    const matchesFunc = matches({ [symbolA]: 1, [symbolB]: 2 });
    expect(matchesFunc({ [symbolA]: 1, [symbolB]: 2 })).toBeTruthy();
  });

  test('should fail for non-matching objects with symbols', () => {
    const symbolA = Symbol('a');
    const symbolB = Symbol('b');
    const matchesFunc = matches({ [symbolA]: 1, [symbolB]: 2 });
    expect(matchesFunc({ [symbolA]: 1, [symbolB]: 5 })).toBeFalsy();
  });
});
