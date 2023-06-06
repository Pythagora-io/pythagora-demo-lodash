import overSome from '../../../overSome';

describe('QA Engineer - overSome', () => {
  test('Truthy for any predicate - string', () => {
    const func = overSome([Boolean, Number.isFinite]);
    expect(func('1')).toBe(true);
  });

  test('Truthy for any predicate - null', () => {
    const func = overSome([Boolean, Number.isFinite]);
    expect(func(null)).toBe(false);
  });

  test('Falsy for all predicates - NaN', () => {
    const func = overSome([Boolean, Number.isFinite]);
    expect(func(NaN)).toBe(false);
  });

  test('Falsy with empty predicate array', () => {
    const func = overSome([]);
    expect(func('0')).toBe(false);
  });

  test('Truthy with multiple predicates - array', () => {
    const func = overSome([Array.isArray, Number.isFinite]);
    expect(func([1, 2, 3])).toBe(true);
  });

  test('Falsy with multiple predicates - incompatible types', () => {
    const func = overSome([Array.isArray, Number.isFinite]);
    expect(func(true)).toBe(false);
  });
});
