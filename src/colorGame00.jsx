import React from "react";

const Square = () => {
  return <button></button>
}
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  let status = `Player ${player}`;

  const renderSquare = () => {
    return <Square></Square>
  }
  return (
    <div className="game-board">

      <div className="grid-row">
        {renderSquare(0)}
      </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

export default Board;
