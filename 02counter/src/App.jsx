import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [Counter, setCounter] = useState(15)

  // let Counter = 15

  const addValue = () =>{
    // console.log('Clicked', Counter);
    //  Counter +=1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () =>{
    console.log('Clicked', Counter);
    //  Counter +=1
    setCounter(Counter - 1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {Counter}</h2>

      <button 
       onClick={addValue}
       >Add value {Counter}</button> <br />
      <button  
       onClick={removeValue}
      >Remove value {Counter}</button>
    </>
  )
}

export default App
