import React, { useState, useEffect } from 'react';
export default function FunctionComponent(){

    const [defaultVal, updateVal] = useState(4)
    console.log('hi')
    useEffect(()=>{
        console.log('defaultVal changed!')
    }, [defaultVal]) //call function whenever defaultVal Changes

    function increment(){
        updateVal(prevCount=>prevCount+1)
    }

    return(
        <div style={{border: "2px dashed blue"}}>
            <h1>learning react hooks in function based components</h1>
            <button onClick={increment}>+</button><span>{defaultVal}</span>
        </div>
    );
}