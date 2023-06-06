import updateWith from '../../../updateWith.js';

describe('updateWith', () => {
  test('basic test', () => {
    const object = {};
    expect(updateWith(object, '[0][1]', () => 'a', Object)).toEqual({ '0': { '1': 'a' } });
  });

  test('no customizer', () => {
    const object = { '0': { '1': 'b' } };
    expect(updateWith(object, '[0][1]', () => 'a')).toEqual({ '0': { '1': 'a' } });
  });

  test('null object', () => {
    expect(updateWith(null, '[0][1]', () => 'a', Object)).toBeNull();
  });

  test('undefined object', () => {
    expect(updateWith(undefined, '[0][1]', () => 'a', Object)).toBeUndefined();
  });
});
