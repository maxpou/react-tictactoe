import React from 'react'
import Board from '../Board/Board'
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'
import './Game.css'

class Game extends React.Component {
  render () {
    const {game} = this.props

    const moves = game.history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move} className={move === game.stepNumber ? 'game-info-current' : ''}>
          <button onClick={() => game.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={game.current.squares}
            onClick={(i) => game.play(i)}
          />
        </div>
        <div className='game-info'>
          <div>{game.getStatus(game.current.squares)}</div>
          <ol>{moves}</ol>
        </div>
        <DevTools />
      </div>
    )
  }
}

export default observer(Game)
