# React + Vite
TODAY'S LEARNING
/**** LABEL TAG 


/****** <input type="checkbox"  defaultChecked={numberAllowed} id="numberInput"
              onChange={() => setnumberAllowed((prev) => !prev)} />
                  LEARN HOW WE CAN USE PREVIOUS VALUE IN  SETNUMBERALLOWED...PREV NAAM KI  j agah KUCH BHI LIKH SKTE HAII...



/*****     <input type="range" > FOR LENGTH SLIDER 

/*******ONCHANGE EVENT

/****learned usecallback function




/**** useeffect function




/*** useref function


DOM ko directly manipulate krne k liye use krte hai , 
useState and useCallback s directly manipulate nhi krskte hai


/****

const copypwdtoclipboard=useCallback(()=>{ 
    window.navigator.clipboard.writeText(password)}, [password])
      ^      ^
      |      |____________navigator wale me function mai clipboard mai password write krna hai using writeText()
      |
      window (whole browser)
    copying the pasword to clipword

    /*****  Math.floor(Math.random() * str.length + 1)