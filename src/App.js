import './App.css';
import Button from './components/Button';
import ClsButton from './components/ClsButton';
import Screen from './components/Screen';
import LogoFCC from './images/FreeCodeCamp_logo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () =>{
    
  let isOperation = input.search(/[+\-*/]/g);
  let isExpresion = input.match(/^\d+[+-/*%^]\d+([+-/*%^]\d+)*$/);

    
    if(input && isOperation != -1 && isExpresion) {
      setInput(evaluate(input))
    }
    
    

  };

  return (
    <div className="App">
      <header>
        <img src={LogoFCC} alt='Logo FreeCodeCamp' title='Logo FreeCodeCamp'/>
      </header>
      <div className='calculator-content'>

        <Screen input={input} />

        <div className="fila">
          <Button inputManager={addInput}>1</Button>
          <Button inputManager={addInput}>2</Button>
          <Button inputManager={addInput}>3</Button>
          <Button inputManager={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button inputManager={addInput}>4</Button>
          <Button inputManager={addInput}>5</Button>
          <Button inputManager={addInput}>6</Button>
          <Button inputManager={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button inputManager={addInput}>7</Button>
          <Button inputManager={addInput}>8</Button>
          <Button inputManager={addInput}>9</Button>
          <Button inputManager={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button inputManager={calculate}>=</Button>
          <Button inputManager={addInput}>0</Button>
          <Button inputManager={addInput}>.</Button>
          <Button inputManager={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClsButton clsInput={clearInput}>Clear</ClsButton>
        </div>
      </div>
      
    </div>
  );
}

export default App;
