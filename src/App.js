import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [box, setBox] = useState(['','','','','','','','',''])
  const [turn, setTurn] = useState(true)
  const [win, setWin] = useState('')
  const [comb, setComb] = useState('');
  let col = 'g';

  const clickHandler = (n) => {
    
    if(win == ''){
    
    if(turn){
      if(box[n] == ''){
        setBox( (prevBox) => {
          let newBox = prevBox;
          newBox[n] = 'X'
          return newBox
        })
        setTurn( prevTurn => !prevTurn )
      }
    } 
    else{
      
      if(box[n] == ''){
        setBox( (prevBox) => {
          let newBox = prevBox;
          newBox[n] = 'O'
          return newBox
        })
        setTurn( prevTurn => !prevTurn )
      }
    }

  }
  }

  const resetHandler = () => {
   
      setBox( (prevBox) => {
        let newBox = prevBox;
        for(let i = 0; i < 9; i++)
        {
          newBox[i] = '';
        }
        return newBox
      }) 
    
    if(turn == true){
      setTurn(false)
    }
    else{
      setTurn(true)
    }
      setWin('')
      setComb('')
  }

  useEffect( () => {
  
    if(box[0]+box[1]+box[2] === "XXX"){setWin('Player One has Won!'); setComb("one")}
    if(box[3]+box[4]+box[5] === "XXX"){setWin('Player One has Won!'); setComb("two")}
    if(box[6]+box[7]+box[8] === "XXX"){setWin('Player One has Won!'); setComb("three")}
    if(box[0]+box[3]+box[6] === "XXX"){setWin('Player One has Won!'); setComb("four")}
    if(box[1]+box[4]+box[7] === "XXX"){setWin('Player One has Won!'); setComb("five")}
    if(box[2]+box[5]+box[8] === "XXX"){setWin('Player One has Won!'); setComb("six")}
    if(box[0]+box[4]+box[8] === "XXX"){setWin('Player One has Won!'); setComb("seven")}
    if(box[2]+box[4]+box[6] === "XXX"){setWin('Player One has Won!'); setComb("eight")}
    
    if(box[0]+box[1]+box[2] === "OOO"){setWin('Player Two has Won!'); setComb("one")}
    if(box[3]+box[4]+box[5] === "OOO"){setWin('Player Two has Won!'); setComb("two")}
    if(box[6]+box[7]+box[8] === "OOO"){setWin('Player Two has Won!'); setComb("three")}
    if(box[0]+box[3]+box[6] === "OOO"){setWin('Player Two has Won!'); setComb("four")}
    if(box[1]+box[4]+box[7] === "OOO"){setWin('Player Two has Won!'); setComb("five")}
    if(box[2]+box[5]+box[8] === "OOO"){setWin('Player Two has Won!'); setComb("six")}
    if(box[0]+box[4]+box[8] === "OOO"){setWin('Player Two has Won!'); setComb("seven")}
    if(box[2]+box[4]+box[6] === "OOO"){setWin('Player Two has Won!'); setComb("eight")}

    if(comb == ''){
      if( (box[0]+box[1]+box[2]+box[3]+box[4]+box[5]+box[6]+box[7]+box[8]).length == 9){
        setWin("The Game is a Draw!")
      }  
    }
    
  })

  return (
    <div className="App">
      
     
      <div className="header"> 
      <h1>Tic Tac Toe</h1> 
      { (win!='') ? <p className="w">{win}</p> : turn ? <p className="g">Player 1's Turn</p> : <p className="r">Player 2's Turn</p>}
      </div>

      <div className="ticcontainer">      
        
      <div className="tictac">
        
        <div className="c c0" onClick={() => clickHandler(0)}>{box[0]}</div>
        <div className="c c1" onClick={() => clickHandler(1)}>{box[1]}</div>
        <div className="c c2" onClick={() => clickHandler(2)}>{box[2]}</div>
        <div className="c c3" onClick={() => clickHandler(3)}>{box[3]}</div>
        <div className="c c4" onClick={() => clickHandler(4)}>{box[4]}</div>
        <div className="c c5" onClick={() => clickHandler(5)}>{box[5]}</div>
        <div className="c c6" onClick={() => clickHandler(6)}>{box[6]}</div>
        <div className="c c7" onClick={() => clickHandler(7)}>{box[7]}</div>
        <div className="c c8" onClick={() => clickHandler(8)}>{box[8]}</div>
        
      
      </div>
      <div className={comb}></div>
      </div>

      
      <div className="reset">
        <button className='btn' onClick={resetHandler}>Reset</button>
      </div>


    </div>
  );
}

export default App;
