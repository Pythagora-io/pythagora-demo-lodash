import defaultsDeep from '../../../defaultsDeep.js';
describe('defaultsDeep', () => {
  test('defaultsDeep basic usage', () => {
    expect(defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } })).toEqual({ a: { b: 2, c: 3 } });
  });

  test('defaultsDeep with multiple sources', () => {
    expect(defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }, { a: { d: 4 } })).toEqual({ a: { b: 2, c: 3, d: 4 } });
  });

  test('defaultsDeep with deeply nested sources', () => {
    expect(defaultsDeep({ a: { b: { c: 2 } } }, { a: { b: { c: 1, d: 3 } } })).toEqual({ a: { b: { c: 2, d: 3 } } });
  });

  test('defaultsDeep with empty objects', () => {
    expect(defaultsDeep({}, {}, {})).toEqual({});
  });

  test('defaultsDeep with object types', () => {
    expect(defaultsDeep({ a: { b: [1, 2] } }, { a: { b: [3] } })).toEqual({ a: { b: [1, 2] } });
  });

  test('defaultsDeep with null values', () => {
    expect(defaultsDeep({ a: { b: null } }, { a: { b: 1, c: 3 } })).toEqual({ a: { b: null, c: 3 } });
  });
});
