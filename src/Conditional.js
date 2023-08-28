import React, { useState } from 'react'

const Conditional = () => {
    const[isLogIn,setIsLogIn]=useState(false);
    let content;
    if(isLogIn){
        content=<h1>hi surya</h1>
    }else{
        content=<button  onClick={()=>setIsLogIn(true)}>Login</button>
    }
  return (
    <div>
      {/* {
        isLogIn?(<h1>hello user</h1>):(<button  onClick={()=>setIsLogIn(true)}>Login</button>)
      } */}
  {/* {content} */}
  {isLogIn&&<h1>hi surya</h1>}
  <button  onClick={()=>setIsLogIn(true)}>Login</button>
    </div>
  )
}

export default Conditional
