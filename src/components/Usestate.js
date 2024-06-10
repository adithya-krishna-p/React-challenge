import React, {useState} from 'react'

const Usestate = () => {

    const [colour, setColour] = useState("green");
    const [colours, setColours] = useState("");
    const [count, setCount] = useState("0");

    const changeColour = () => {
        setColour("red");
    };
    const changebackgrnd = () => {
    
        setColours("");
    };

    const increment = () => {
        setCount(count + 1);
    };
    const Decrement = () => {
        setCount(count - 1);
    };

  return (
    <>
    <div className='backgrnd-1'>
    <div>Usestate</div>
    <h2>my fav colour is {colour}</h2>
    <button onClick={changeColour}>change colour</button>
    </div>
   
    <div className='backgrnd-2' onchange={changebackgrnd}>
    <div>Usestate</div>
    <h2>my fav colour is {colours}</h2>
    <button onchange={changebackgrnd}>change colour</button>
    </div>

        
    


    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <h1>
            count is {count}
        </h1>
        <button onClick={increment}>+</button>
        <button onClick={Decrement}>-</button>
    </div>

    </>
  )
}

export default Usestate;