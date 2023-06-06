import startCase from '../../../startCase.js';

describe('startCase', () => {
  test('startCase(\'--foo-bar--\')', () => {
    expect(startCase('--foo-bar--')).toBe('Foo Bar');
  });

  test('startCase(\'fooBar\')', () => {
    expect(startCase('fooBar')).toBe('Foo Bar');
  });

  test('startCase(\'__FOO_BAR__\')', () => {
    expect(startCase('__FOO_BAR__')).toBe('FOO BAR');
  });

  test('startCase(\'\')', () => {
    expect(startCase('')).toBe('');
  });

  test('startCase(\'start case\')', () => {
    expect(startCase('start case')).toBe('Start Case');
  });

  test('startCase(\'StartCase\')', () => {
    expect(startCase('StartCase')).toBe('Start Case');
  });

  test('startCase(\'start_case\')', () => {
    expect(startCase('start_case')).toBe('Start Case');
  });

  test('startCase(\'123test\')', () => {
    expect(startCase('123test')).toBe('123 Test');
  });
});
