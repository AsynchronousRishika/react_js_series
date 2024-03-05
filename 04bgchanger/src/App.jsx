import { useState} from "react"

/**function Color( props){
  document.querySelector(".w-full").style.backgroundColor={color}
  
  return (
    
    <Button onClick={()=>setcolor(props.style)}>

      </Button> 
      
      
      );
    }*/
    
    function App() {
  const [color, setcolor]=useState("green")


  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>



        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 


        <div className="flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl "> 
        
        
        
        <button   onClick={()=>setcolor("red")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}>
          red </button>
          

          <button   onClick={()=>setcolor("purple")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"purple"}}>
          purple </button>

          <button   onClick={()=>setcolor("pink")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"pink"}}>
          pink </button>


          <button   onClick={()=>setcolor("black")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"black"}}>
          black </button>


          <button   onClick={()=>setcolor("white")} className="outline-none px-4 rounded-full text-black shadow-lg border-solid border-2  border-grey " style={{backgroundColor:"white"}}>
          white </button>


          <button   onClick={()=>setcolor("orange")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"orange"}}>
          orange </button>



          <button   onClick={()=>setcolor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"blue"}}>
          blue </button>


          <button   onClick={()=>setcolor("brown")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"brown"}}>
          brown </button>


          <button   onClick={()=>setcolor("yellow")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor:"yellow"}}>
          yellow </button>
          
          
         
          
          
          </div>
        </div>



     </div>
     {/*inline styling in react jsx ..hume color naam k variable inject krna hai toh inline styling ki mdd s krege 
     
     ... and inline styling syntax 
     style={{ propeties}}*/}


    </>
  )
}

export default App
