import React, { useState } from 'react'

const Events = () => {

    const clickhandle = () => {
        alert("warning")
    };

    const typehandle = () => {
         console.log("warning");
    };

    const mousehandle = () => {
        alert("warning");
   };

//    const changecolour = () => {
    
// };

  

  return (
    <>
        <button onClick={clickhandle}>click here</button>

        <input type='text' onChange={typehandle}></input>

        <h1 onMouseOver={mousehandle}>hi adhi </h1>
    </>
  )
}

export default Events;