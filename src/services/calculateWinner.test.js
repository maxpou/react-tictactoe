import calculateWinner from '../services/calculateWinner'

describe('calculateWinner.js', () => {
  it('calculateWinner return null if no winner', () => {
    const state = Array(9).fill(null)
    const noWinner = calculateWinner(state)
    expect(noWinner).toBeNull()
  })

  it('calculateWinner return a winner', () => {
    const state = [null, 'X', 'O', null, 'O', null, 'O', 'X', 'X']
    const winner = calculateWinner(state)
    expect(winner).toBe('O')
  })
})
