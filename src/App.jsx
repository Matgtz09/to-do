import './App.css'
//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
//import './styles.css';
//import CheckBox from './CheckBox'
import { useState } from 'react'
import Board from './Board'
import Connect4Board from './Connect4Board'

function App() {
  const [selectedGame, setSelectedGame] = useState('tictactoe');

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div>
      <label htmlFor="games">Choose a game:</label>
      <select id="games" value={selectedGame} onChange={handleGameChange}>
        <option value="tictactoe">Tic-Tac-Toe</option>
        <option value="connect4">Connect4</option>
        <option value="checkers">Checkers</option>
      </select>

      <div className="game-board">
        {selectedGame === 'tictactoe' && <Board />}
        {selectedGame === 'connect4' && <Connect4Board />}
        {/* {selectedGame === 'checkers' && <Checkers />} */}
      </div>
    </div>
  );
}

export default App
