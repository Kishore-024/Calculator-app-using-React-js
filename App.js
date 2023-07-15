import './App.css';
import React, { useState } from 'react';

const App=()=>{
  const[result,setResult]=useState("")
  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));

  }
  const clear=()=>{
    setResult(" ")
  }
  const backspace=()=>{
    setResult(result.slice(0,result.length -1));

  }
  const calci=()=>{
    try{
      setResult(eval(result))
    }
    catch(err){
      setResult("error")

    }

  }
  return(
    <div className='container'>
      <form>
        <input type='text' value={result} />
      </form>
      <div className='keypad'>
        <button className='clicks' onClick={clear} id= "clear">Clear</button>
        <button className='clicks' onClick={backspace} id="backspace">c</button>
        <button className='clicks'  name ="/" onClick={handleClick}>%</button>
        <button name ="7"onClick={handleClick}>7</button>
        <button name ="8"onClick={handleClick}>8</button>
        <button name ="9"onClick={handleClick}>9</button>
        <button  className='clicks' name ="*"onClick={handleClick}>*</button>
        <button name ="4"onClick={handleClick}>4</button>
        <button name ="5"onClick={handleClick}>5</button>
        <button name ="6"onClick={handleClick}>6</button>
        <button  className='clicks' name ="-"onClick={handleClick}>-</button>
        <button name ="1"onClick={handleClick}>1</button>
        <button name ="2"onClick={handleClick}>2</button>
        <button name ="3"onClick={handleClick}>3</button>
        <button className='clicks' name ="+"onClick={handleClick}>+</button>
        <button name ="0"onClick={handleClick}>0</button>
        <button name ="."onClick={handleClick}>.</button>
        <button className='clicks' onClick={calci} id="result">=</button>

      </div>

    </div>
    
  )
}


export default App;
