import groupBy from '../../../groupBy.js';
describe('groupBy', () => {
  test('should group by property and return expected output', () => {
    const input = [{ section: 'A', item: 10 }, { section: 'B', item: 5 }, { section: 'A', item: 15 }];
    const output = groupBy(input, x => x.section);
    expect(output).toEqual({ 'A': [ { "section": "A", "item": 10 }, { "section": "A", "item": 15 } ], 'B': [ { "section": "B", "item": 5 } ] });
  });

  test('should handle empty array as input', () => {
    const input = [];
    const output = groupBy(input, x => x.section);
    expect(output).toEqual({});
  });

  test('should handle undefined values', () => {
    const input = [undefined, undefined];
    const output = groupBy(input, x => x);
    expect(output).toEqual({ "undefined": [undefined, undefined] });
  });

  test('should handle null values', () => {
    const input = [undefined, undefined, null];
    const output = groupBy(input, x => x);
    expect(output).toEqual({ "undefined": [undefined, undefined], "null": [null] });
  });

  test('should handle custom numerical iteratee', () => {
    const input = [1.5, 2.3, 3.4, 4.9];
    const output = groupBy(input, Math.floor);
    expect(output).toEqual({ "1": [1.5], "2": [2.3], "3": [3.4], "4": [4.9] });
  });

});
