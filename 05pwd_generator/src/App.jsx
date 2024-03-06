import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}~`[]?/_-+=:;'"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)


  }, [length, numberAllowed, charAllowed, setpassword])
  return (
    <>

  

      <div className='w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-4 my-9 text-orange-500 bg-gray-900'>
      <h1 className=' text-center text-white my-2'>Password generator</h1>


          <div className=" flex flex-shadow  rounded-lg overflow-hidden mb-4">
              
              <input type="text" value={password}  className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>

              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
                




          </div>


<div className="flex text-sm gap-x-2">
  <div className="flex items-center gap-x-1">
           <input type="range"  min={6}
           max={100}
           value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}}/>
           <label> length:{length}</label>

  </div>
  <div className="flex items-center gap-x-1">
      <input type="checkbox" name="" defaultChecked={numberAllowed}  id="numberInput" 
      onChange={()=> setnumberAllowed((prev)=>!prev)} />
      <label htmlFor="numberInput"> Numbers</label>
      </div>
      
      <div className="flex items-center gap-x-1">
      <input type="checkbox" name="" defaultChecked={charAllowed}  id="charInput" 
      onChange={()=> setcharAllowed((prev)=>!prev)} />
      <label htmlFor="charInput">characters</label>
      </div>
      
</div>




      </div>

    </>
  )
}

export default App
