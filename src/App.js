
import './App.css';
import { useEffect, useState } from 'react';
import Square from './Components/Square';
import { Patterns } from './Components/Patterns';


function App() {
 
  const [board,setBoard] = useState([" "," "," "," "," "," "," "," "," "]);
  const [player,setPlayer] = useState('X');
  const [result,setResult] = useState({winner:"none",state:"none"});
  
  useEffect(() => {
    checkWin();
    checkIfTies();

    if (player == 'X'){
      setPlayer('O')
    }else{
    setPlayer('X')
    } 
  },[board]);

  useEffect(() => {
    if(result.state != "none"){
    alert(`Game finished! Wining player: ${result.winner}`)
  }
    restartGame();
  },[result]); 

  const chooseSquare = (square) =>{
    setBoard(board.map((val,idx) => { 
        if (idx == square && val == " ") {
          return player
        }
        return val;
    }));
  };
 
  const checkWin = () => {
      Patterns.forEach((currPattern) => {
        const first_player = board[currPattern[0]];
        if (first_player == ' ') return;
        let foundWining_pattern = true;
        currPattern.forEach((idx) => {
          if (board[idx] != first_player){
            foundWining_pattern = false;
          }
        })

        if (foundWining_pattern){
           setResult({winner:player,state:"won"})
        }

      })
    }


  const checkIfTies = () => {
    let filled = true;
    board.forEach((square) => {
       if (square == " "){
         filled = false
       }
    });

      if (filled){
         setResult({winner:"No one",state:"Tie"})
    }
  }

  const restartGame = () =>{
       setBoard([" "," "," "," "," "," "," "," "," "]);
       setPlayer("O");

  }
  return (
    <div className='App'>
      <div className='board'>
        <div className='row'>
        <Square value = {board[0]} chooseSquare = {() => {
          chooseSquare(0)}
        }/>
        <Square value = {board[1]} chooseSquare = {() => {
          chooseSquare(1)
        }}/> 
        <Square value = {board[2]} chooseSquare = {() => {
          chooseSquare(2)
        }}/>
        </div>
        <div className='row'>
        <Square value = {board[3]} chooseSquare = {() => {
          chooseSquare(3)}
        }/>
        <Square value = {board[4]} chooseSquare = {() => {
          chooseSquare(4)
        }}/> 
        <Square value = {board[5]} chooseSquare = {() => {
          chooseSquare(5)
        }}/>
        </div>
        <div className='row'>
        <Square value = {board[6]} chooseSquare = {() => {
          chooseSquare(6)}
        }/>
        <Square value = {board[7]} chooseSquare = {() => {
          chooseSquare(7)
        }}/> 
        <Square value = {board[8]} chooseSquare = {() => {
          chooseSquare(8)
        }}/>
       </div>
                
     </div>
      
    </div>
  );
}

export default App;
