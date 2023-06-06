import mapValue from '../../../mapValue.js';
describe('mapValue', () => {
  test('Should return a new object with mapped values', () => {
    const input = {
      'a': { 'value': 1 },
      'b': { 'value': 2 },
      'c': { 'value': 3 },
    };

    const expected = {
      'a': 2,
      'b': 4,
      'c': 6,
    };

    expect(mapValue(input, ({ value }) => value * 2)).toEqual(expected);
  });

  test('Should return an empty object if input object is empty', () => {
    const input = {};
    const expected = {};

    expect(mapValue(input, value => value)).toEqual(expected);
  });

  test('Should handle non-object inputs', () => {
    const input = '';
    const expected = {};

    expect(mapValue(input, value => value)).toEqual(expected);
  });

  test('Should pass in the correct params into the iteratee', () => {
    const input = { testName: { fieldName: 'fieldValue'} };

    const iteratee = jest.fn((value, key, object) => value);

    mapValue(input, iteratee);

    expect(iteratee.mock.calls[0]).toEqual([{ fieldName: 'fieldValue'}, 'testName', input]);
  });
});
