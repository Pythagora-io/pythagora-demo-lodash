import pull from '../../../pull.js'

describe('pull', () => {
  test('1', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c']
    pull(array, 'a', 'c')
    expect(array).toEqual(['b', 'b'])
  })

  test('2', () => {
    const array = [1, 2, 3, 1, 2, 3]
    pull(array, 1, 3)
    expect(array).toEqual([2, 2])
  })

  test('3', () => {
    const array = []
    pull(array, 'a', 'b')
    expect(array).toEqual([])
  })

  test('4', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c']
    pull(array)
    expect(array).toEqual(['a', 'b', 'c', 'a', 'b', 'c'])
  })

  test('5', () => {
    const array = [null, undefined, '', 0, false]
    pull(array, undefined, null)
    expect(array).toEqual(['', 0, false])
  })
})