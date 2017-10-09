import React from 'react'
import ReactDOM from 'react-dom'
import Game from './Game'

describe('Game.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Game />, div)
  })
})
