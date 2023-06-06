import reject from '../../../reject.js'

describe('reject', () => {
  test('should return an array with rejected elements', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
    ]

    expect(reject(users, ({ active }) => active)).toEqual([{ 'user': 'fred', 'active': false }])
  })

  test('should return an empty array if all elements pass the predicate', () => {
    const numbers = [2, 4, 6, 8]

    expect(reject(numbers, (number) => number % 2 === 0)).toEqual([])
  })

  test('should work with an object collection', () => {
    const collection = {
      'a': 1,
      'b': 2,
      'c': 3,
    }

    expect(reject(collection, (value) => value > 2)).toEqual([1, 2])
  })

  test('should return an empty array if predicate is not a function', () => {
    const collection = [1, 2, 3, 4]
    const invalidPredicate = 'not a function'

    expect(() => reject(collection, invalidPredicate)).toThrow(TypeError)
  })

})
