import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 15;
  let [counter, setCounter] = useState(15); //The Memory Hook

  const addValue = () => {
    // counter = counter+1;
    if(counter<20)
    setCounter(counter+1);
  }

  const removeValue = () => {
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
    <h1>Counter Project</h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <button onClick={removeValue}>Remove value</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
