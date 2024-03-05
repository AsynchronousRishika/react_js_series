
import React from 'react'
/**jaise hume ek baar me kuch kuch jagah pr name change krne hai toh props use krege ...jo ki ek object  hai..aur ise humne argument ki trh bheja hai fucntion card mai...app.jsx me card tag hum koi string variable define krege wo card function as a value pss hogi aur props object me store hoojayegi */

function Card(props) {
  /**ya toh hum ese bhi likh skte hai fucntion Card(username, btntext) direct use krskte hai   
   * 
   * in case humne  2nd card ko tbntext nhi diya ya ttoh hum  jha btntext use krna hai wha OR oprrator use krle ya toh hum fucnion pr hai default value de de  
   * 
   * fucntion Card(username, btntext="visite me ")
   * 
   */
 console.log("props", props)
  return (
   <> 
    <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{props.username}</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
     {props.btntext ||"visit me "} →
    /* humne OR operator  use kiya in case second card pr humne btntext nhi diya toh kya print  */
    </button>
    
  </div>
</div>

     </>
     
    
  )
}

export default Card
