import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game/Game'
import GameModel from './model/GameModel'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Game game={new GameModel()} />, document.getElementById('root'))
registerServiceWorker()
