import { useState } from 'react';
import CalculateWinnerforConnect4 from './CalculateWinnerforConnect4';
import Square from './Square';
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(42).fill(null));
  const nextSquares = squares.slice();
  const rows = 6;
  const cols = 7;

  function getEligibleIndex(index){
    let eligibleIndex = (index % 7 ) + ((rows - 1 ) * cols);

    while(eligibleIndex - 7 > 0 && nextSquares[eligibleIndex] != null){
      eligibleIndex -= 7;
    }

    return eligibleIndex;
  }

  function handleClick(i) {
    if( CalculateWinnerforConnect4(nextSquares) || squares[i])
    {
      return;
    }

    let index = getEligibleIndex(i);

    if(xIsNext && nextSquares[index] == null){
      nextSquares[index] = "R";
    }
    else if(!xIsNext && nextSquares[index] == null){
      nextSquares[index] = "B";
    }
    else {
      return;
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = CalculateWinnerforConnect4(nextSquares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'R' : 'B');
  }
  //I want to make the UI display the winner or if it is a tie
  // we should have a button to restart
  
  const renderRow = (rowIndex) => {
    const row = [];
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      const squareIndex = rowIndex * cols + colIndex;
      row.push(
        <Square
          key={squareIndex}
          value={squares[squareIndex]}
          onSquareClick={() => handleClick(squareIndex)}
        />
      );
    }
    return <div className="board-row">{row}</div>;
  };

  const renderBoard = () => {
    const board = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      board.push(renderRow(rowIndex));
    }
    return board;
  };

  return (
    <>
    <div className="status">{ status }</div>
    <div>{renderBoard()}</div>
    </>
  );
}

/* <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    </div>
    <div className="board-row">
      <Square value={squares[7]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[9]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[10]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[11]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[12]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[13]} onSquareClick={() => handleClick(6)} />
    </div>
    <div className="board-row">
      <Square value={squares[14]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[15]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[16]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[17]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[18]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[19]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[20]} onSquareClick={() => handleClick(6)} />
    </div>
    <div className="board-row">
      <Square value={squares[21]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[22]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[23]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[24]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[25]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[26]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[27]} onSquareClick={() => handleClick(6)} />
    </div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    </div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    </div> */