import React, { useState } from 'react'


function Searching(propes) {

    const[states,setState]= useState("");

    const handleInput=(e)=>{
        setState(e.target.value.toUpperCase())
    }

    const handleKeys=(e)=>{
        if(e.key=="Escape"){
            setState("")
            console.log("Escape Pressed")
        }
    }


  return (
    <div>
        <input type="text" onChange={(e)=>handleInput(e)} onKeyDown={handleKeys} />
        <button>Search</button>
{/* this state is written so that if we didn't write anything then it will not render our options */}
        {states&&(
            <div>
                {propes.data.filter((e)=>
                e.name.slice(0,states.length).toUpperCase()===states).map((el)=>{
                return(    
                    <p key={el.code}>
                        {el.name}
                    </p>
                )
                })}
            </div>
        )}
    </div>
  )
}

export default Searching