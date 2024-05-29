import React,{useEffect, useState} from "react";

const Square = ({id,player, newState}) => {
  const [color,setColor] = useState("red")
  const palet = ['red','blue','green']

  const getRandomColor = () => {
   return palet[Math.floor(Math.random() * 3)];
  }

  useEffect(()=>{
    console.log(`Render ${id}`)
    return ()=> console.log(`unmounting Square ${id}`)
  })


  return (
  <button onClick={(e) => {
    let col = getRandomColor()
    setColor(col)
    newState({id:id, color:col})
    e.target.style.background = col;
      alert(`I am Square ${id}`)
  
    }}>
    <h1>{player}</h1>
  </button>
)
}
const Board = () => {

  const [player, setPlayer] = useState("Player");
  const [mounted,setMounted] = useState(true)
  const [random, setRandom] = useState(0)
  const [state,setState] = useState([])

  let status = ` ${player}`;

  const newState = (object)=>{
    setState([...state, object])
    console.log(`adding state ${JSON.stringify(object)}`)
  }

  const reRender = ()=> setRandom(Math.random())

  const toogle = ()=> setMounted(!mounted)

  const renderSquare = (i) => {

    return <Square id={i} newState={newState} player={player}></Square>
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
        <button onClick={reRender}>Re-Render</button>
        <h1> Turn of player {player}</h1>
      </div>
    </div>
  );
};

export default Board;
