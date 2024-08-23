import { useState } from 'react';
import CalculateWinner from './CalculateWinner';
import Square from './Square'
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] =useState(Array(9).fill(null));
  const nextSquares = squares.slice();

  function handleClick(i) {
    if( CalculateWinner(nextSquares) || squares[i])
    {
      return;
    }

    if(xIsNext && nextSquares[i] == null){
      nextSquares[i] = "X";
    }
    else if(!xIsNext && nextSquares[i] == null){
      nextSquares[i] = "O";
    }
    else {
      return;
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = CalculateWinner(nextSquares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  //I want to make the UI display the winner or if it is a tie
  // we should have a button to restart
  //

  return (
    <>
    <div className="status">{ status }</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>
  );
}