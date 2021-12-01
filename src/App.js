import './App.css';
import React, { useState } from 'react';
import * as math from 'mathjs'

function App() {

const [result , setResult] =useState("")

const keyClick=(e)=>{

  setResult(result.concat(e.target.name))

}
const clear =()=>{
  setResult('')
}

const backspace=()=>{

  setResult(result.slice(0,result.length-1))
}
const calculate=()=>{
try {
//setResult(eval(result).toString())
setResult(math.evaluate(result))
}
catch(error){
setResult("Error")
}
}
  return (
    <div className="container">
      <form>
        <input type ="text" value={result}/>
      </form>
      <div className="key">
        <button className="operations" onClick={clear} id ="clear">Clear</button>
        <button className="operations" onClick={backspace} id ="backspace">⌫</button>
        <button className="operations" name ="/" onClick={keyClick}>&divide;</button>
        <button name ="7" onClick={keyClick}>7</button>
        <button name ="8" onClick={keyClick}>8</button>
        <button name ="9" onClick={keyClick} >9</button>
        <button className="operations" name ="*" onClick={keyClick}>*</button>
        <button name ="4" onClick={keyClick}>4</button>
        <button name ="5" onClick={keyClick}>5</button>
        <button name ="6" onClick={keyClick} >6</button>
        <button className="operations" name ="-" onClick={keyClick}>-</button>
        <button name ="1" onClick={keyClick}>1</button>
        <button name ="2" onClick={keyClick}>2</button>
        <button name ="3" onClick={keyClick} >3</button>
        <button className="operations" name ="+" onClick={keyClick} >+</button>
        <button name ="0" onClick={keyClick}>0</button>
        <button name ="." onClick={keyClick}>.</button>
        <button className="operations" name ="=" onClick={calculate} id ="result">=</button>

      </div>
      </div>
  );
}

export default App;
