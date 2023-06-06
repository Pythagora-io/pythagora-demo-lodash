import flip from '../../../flip.js';
describe('flip', () => {
  test('flips argument order', () => {
    const flipped = flip((...args) => args);
    expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
  });

  test('throws TypeError for non-function input', () => {
    expect(() => flip('not a function')).toThrow(TypeError);
  });

  test('no arguments passed', () => {
    const flipped = flip((...args) => args);
    expect(flipped()).toEqual([]);
  });

  test('single argument passed', () => {
    const flipped = flip((...args) => args);
    expect(flipped('a')).toEqual(['a']);
  });
});
