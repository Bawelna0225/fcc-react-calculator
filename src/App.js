import { useState } from 'react';

import './styles.css';


const App = () => {
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result.concat(e.target.innerText))
  }
 
  const clear = () => {
    setResult("0")
  }

  const del = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const calculate = () => {
    setResult(eval(result).toString())
  }
  return (
    <div className="calc-grid">
      <div id='display'>
        {result || '0'}
      </div>
        <button id='clear' className='span-two' onClick={clear}>AC</button>
        <button id='delete' onClick={del}>DEL</button>
        <button id='divide' onClick={handleClick}>/</button>
        <button id='one' onClick={handleClick}>1</button>
        <button id='two' onClick={handleClick}>2</button>
        <button id='three' onClick={handleClick}>3</button>
        <button id='multiply' onClick={handleClick}>*</button>
        <button id='four' onClick={handleClick}>4</button>
        <button id='five' onClick={handleClick}>5</button>
        <button id='six' onClick={handleClick}>6</button>
        <button id='add' onClick={handleClick}>+</button>
        <button id='seven' onClick={handleClick}>7</button>
        <button id='eight' onClick={handleClick}>8</button>
        <button id='nine' onClick={handleClick}>9</button>
        <button id='subtract' onClick={handleClick}>-</button>
        <button id='decimal' onClick={handleClick}>.</button>
        <button id='zero' onClick={handleClick}>0</button>
        <button id='equals' className='span-two' onClick={calculate}>=</button>
    </div>
  );
}

export default App;
