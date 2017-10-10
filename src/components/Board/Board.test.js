import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'

describe('Game.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const squares = Array(9).fill(null)
    ReactDOM.render(
      <Board
        squares={squares}
      />,
    div)
  })
})
