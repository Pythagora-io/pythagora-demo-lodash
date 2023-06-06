import reduce from '../../../reduce.js';
import _ from 'lodash';

describe('reduce', () => {
    test('should handle empty arrays', () => {
        const input = [];
        const iteratee = (sum, n) => sum + n;
        expect(reduce(input, iteratee, 0)).toBe(0);
    });

    test('should handle simple sum with initial value', () => {
        const input = [1, 2, 3];
        const iteratee = (sum, n) => sum + n;
        expect(reduce(input, iteratee, 0)).toBe(6);
    });

    test('should handle simple sum without initial value', () => {
        const input = [1, 2, 3];
        const iteratee = (sum, n) => sum + n;
        expect(reduce(input, iteratee)).toBe(6);
    });

    test('should handle object input with initial value', () => {
        const input = { a: 1, b: 2, c: 3 };
        const iteratee = (sum, n) => sum + n;
        expect(reduce(input, iteratee, 0)).toBe(6);
    });

    test('should handle object input without initial value', () => {
        const input = { a: 1, b: 2, c: 3 };
        const iteratee = (sum, n) => sum + n;
        expect(reduce(input, iteratee)).toBe(6);
    });

    test('should return correct result for custom object iteration', () => {
        const input = { a: 1, b: 2, c: 1 };
        const iteratee = (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        };
        const output = reduce(input, iteratee, {});
        expect(_.isEqual(output, { 1: ['a', 'c'], 2: ['b'] })).toBeTruthy();
    });
});