import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // varialbe and function that controls that variable.
  const [counter, setCounter] = useState(0, )
  
  // let counter = 5;

  const addValue = () => {
    console.log("clicked",counter);
    // let newcounter = counter + 1
    // setCounter( counter + 1) // setCounter takes the new value that needs to be added in the counter vairable. 
    //naming is not compulsory : setCounter / can be keept mihirCounter, etc.
    // setCounter( counter + 1) 
    // setCounter( counter + 1) 
    // setCounter( counter + 1) 
    // setCounter( counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>React Hooks!</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <button
        onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
