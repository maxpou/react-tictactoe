import React from 'react'
import getWinner from '../services/get-winner'
import Square from './Square'
import './Board.css'

export default class Board extends React.Component {
  constructor () {
    super()
    this.init()
  }

  init () {
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare (i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  handleClick (i) {
    const squares = this.state.squares.slice()

    if (getWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  reset () {
    console.log('reset')
    this.init()
    console.log(this.state)
  }

  render () {
    const winner = getWinner(this.state.squares)
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className='restart'>
          <button onClick={() => this.reset()}>Restart</button>
        </div>
      </div>
    )
  }
}
