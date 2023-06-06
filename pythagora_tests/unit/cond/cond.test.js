import cond from '../../../cond.js';
import matches from '../../../matches.js';
import conforms from '../../../conforms.js';
import isNumber from '../../../isNumber.js';

describe('cond', () => {
  test('cond_1', () => {
    const func = cond([
      [matches({ 'a': 1 }), () => 'matches A'],
      [conforms({ 'b': isNumber }), () => 'matches B'],
      [() => true, () => 'no match'],
    ]);
    expect(func({ 'a': 1, 'b': 2 })).toBe('matches A');
  });

  test('cond_2', () => {
    const func = cond([
      [matches({ 'a': 1 }), () => 'matches A'],
      [conforms({ 'b': isNumber }), () => 'matches B'],
      [() => true, () => 'no match'],
    ]);
    expect(func({ 'a': 0, 'b': 1 })).toBe('matches B');
  });

  test('cond_3', () => {
    const func = cond([
      [matches({ 'a': 1 }), () => 'matches A'],
      [conforms({ 'b': isNumber }), () => 'matches B'],
      [() => true, () => 'no match'],
    ]);
    expect(func({ 'a': '1', 'b': '2' })).toBe('no match');
  });

  test('cond_4', () => {
    expect(() => cond(null)).not.toThrow(TypeError);
  });

  test('cond_5', () => {
    const func = cond([]);
    expect(func({}, {}, {})).toBeUndefined();
  });

  test('cond_6', () => {
    expect(() => cond([ [() => true, 'not a function']])).toThrow(TypeError);
  });
});
