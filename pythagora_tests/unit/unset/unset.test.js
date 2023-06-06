import unset from '../../../unset.js';

describe('unset', () => {
  test('removes_property_by_path_string', () => {
    const object = { 'a': [{ 'b': { 'c': 7 } }] };
    expect(unset(object, 'a[0].b.c')).toBe(true);
    expect(object).toEqual({ 'a': [{ 'b': {} }] });
  });

  test('removes_property_by_path_array', () => {
    const object = { 'a': [{ 'b': { 'c': 7 } }] };
    expect(unset(object, ['a', '0', 'b', 'c'])).toBe(true);
    expect(object).toEqual({ 'a': [{ 'b': {} }] });
  });

  test('null_object', () => {
    const object = null;
    expect(unset(object, 'a.b.c')).toBe(true);
  });

  test('undefined_object', () => {
    const object = void 0;
    expect(unset(object, 'a.b.c')).toBe(true);
  });
});
