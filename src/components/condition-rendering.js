import React from 'react'
import '../App.css'

export default function conditionrendering() {
    let number = 0;
    let isloggedin = false;
    // const Checknumber =({number})=>{
    //     if(number>0) {
    //         return <h1>Positive number</h1>;
    //     } else if(number < 0){
    //         return <h1>Negative number</h1>;
    //     }else {
    //         return <h1>Zero</h1>;
    //     }


return (
    <>
        <div className='conditionrendering'>
            <h1>Conditionrendering</h1>
        </div>
        <div className='container'>
            {number > 0 ? <h1>Positive</h1> : number < 0 ? <h1>Negative</h1> : <h1>Zero</h1>}
            
            {isloggedin ? <h1>Welcome to website</h1>  : <h1>please login</h1>}
        </div>
    </>
)};
