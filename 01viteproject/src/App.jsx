import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [counter, setCount] = useState(15)
  
let addvalue=()=>{
    setCount(counter+1)
    setCount(counter+1)  
    setCount(counter+1)

}

let removevalue=()=>{
    counter= counter-1
    setCount(counter)
}

  return (
    <>
  
        <p>counter: {counter}</p>
        <button onClick={addvalue}>added value: {counter}
            </button>
            
            <br />
            <button onClick={removevalue}> value: {counter}</button>
    

     
    </>
    


  )
}

export default App
