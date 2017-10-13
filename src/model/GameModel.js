import { extendObservable, computed } from 'mobx'
import calculateWinner from '../services/calculateWinner'

export default class GameModel {
  constructor () {
    extendObservable(this, {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: computed(() => this.stepNumber % 2 === 0),
      current: computed(() => this.history[this.stepNumber])
    })
  }

  jumpTo (step) {
    this.stepNumber = step
  }

  play (squareNumber) {
    const history = this.history.slice(0, this.stepNumber + 1)
    const squares = this.current.squares.slice()
    if (calculateWinner(squares) || squares[squareNumber]) {
      return
    }
    squares[squareNumber] = this.xIsNext ? 'X' : 'O'
    this.history = history.concat([{
      squares: squares
    }])
    this.stepNumber = history.length
  }

  // should be a computed
  getStatus () {
    const current = this.history[this.stepNumber]
    const winner = calculateWinner(current.squares)
    if (winner) {
      return 'Winner: ' + winner
    }

    return 'Next player: ' + (this.xIsNext ? 'X' : 'O')
  }
}
