import isNull from '../../../isNull.js';
describe('isNull', () => {
  test('null input', () => {
    expect(isNull(null)).toBe(true)
  })

  test('undefined input', () => {
    expect(isNull(void 0)).toBe(false)
  })

  test('empty string', () => {
    expect(isNull('')).toBe(false)
  })

  test('number input', () => {
    expect(isNull(42)).toBe(false)
  })

  test('NaN input', () => {
    expect(isNull(NaN)).toBe(false)
  })

  test('boolean input', () => {
    expect(isNull(true)).toBe(false)
  })

  test('array input', () => {
    expect(isNull([])).toBe(false)
  })

  test('object input', () => {
    expect(isNull({})).toBe(false)
  })

  test('function input', () => {
    expect(isNull(() => {})).toBe(false)
  })

})
