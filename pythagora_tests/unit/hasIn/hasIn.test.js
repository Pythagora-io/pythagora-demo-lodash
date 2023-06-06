import hasIn from '../../../hasIn.js';
describe('hasIn', () => {
  test('should return true for inherited property', () => {
    const proto = { b: 2 };
    const object = Object.create(proto);
    object.a = 1;

    expect(hasIn(object, 'a')).toBeTruthy();
    expect(hasIn(object, 'b')).toBeTruthy();
  });

  test('should return false for non-existent property', () => {
    const object = { a: 1, c: 3 };

    expect(hasIn(object, 'b')).toBeFalsy();
  });

  test('should return false for null object', () => {
    expect(hasIn(null, 'a')).toBeFalsy();
  });

  test('should return false for undefined object', () => {
    expect(hasIn(undefined, 'a')).toBeFalsy();
  });

  test('should return false for non-objects', () => {
    expect(hasIn(42, 'a')).toBeFalsy();
    expect(hasIn('string', 'a')).toBeFalsy();
    expect(hasIn(true, 'a')).toBeFalsy();
  });
});
