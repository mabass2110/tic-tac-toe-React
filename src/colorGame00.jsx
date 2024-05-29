import React,{useState} from "react";

const Square = ({id,player}) => {
  const [color,setColor] = useState("red")
  const palet = ['red','blue','green']

  const getRandomColor = () => {
   return palet[Math.floor(Math.random() * 3)];
  }
  return (
  <button onClick={(e) => {

    setColor(getRandomColor)

    e.target.style.background = color;
      alert(`I am Square ${id}`)
  
    }}>
    <h1>{player}</h1>
  </button>
)
}
const Board = () => {

  const [player, setPlayer] = React.useState("Player");
  const [mounted,setMounted] = React.useState(true)
  let status = ` ${player}`;

  const toogle = ()=> setMounted(!mounted)

  const renderSquare = (i) => {

    return <Square id={i} player={player}></Square>
  }
  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toogle}>Show/Hide Row</button>
        <h1> Turn of player {player}</h1>
      </div>
    </div>
  );
};

export default Board;
