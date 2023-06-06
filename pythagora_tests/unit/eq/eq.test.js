import eq from '../../../eq.js';
describe('eq', () => {
  test('eq with identical objects', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).toBeTruthy();
  });

  test('eq with different objects', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBeFalsy();
  });

  test('eq with identical strings', () => {
    expect(eq('a', 'a')).toBeTruthy();
  });

  test('eq with a string and object containing identical string', () => {
    expect(eq('a', Object('a'))).toBeFalsy();
  });

  test('eq with NaN', () => {
    expect(eq(NaN, NaN)).toBeTruthy();
  });

  test('eq with different types', () => {
    expect(eq(5, '5')).toBeFalsy();
  });

  test('eq with identical arrays', () => {
    const array = [1, 2, 3];
    expect(eq(array, array)).toBeTruthy();
  });

  test('eq with different arrays', () => {
    expect(eq([1, 2, 3], [1, 2, 3])).toBeFalsy();
  });
});
