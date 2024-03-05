import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from 'Card'

function App() {
  const [count, setCount] = useState(0)
  /*in jsx humare html tag k closing tag hota hai like img k closing tag nhi hota hai toh hum usko <img/> iss trh s use krte hai*/
let myarr=[1,2,3]
/**hume value array wali as a variable me pss krskte hai 
 * ya object  bnale phir uske as a variable {} k andr pss krde
*/

  return (
    <>
     <h1 className='bg-green-200 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card username="rishika"  btntext={myarr}/>
      
  
     <Card username="jain" />

     
    </>/**isko bolte hai fragments or emoty tag */
    /*  */
    


  )
}

export default App
