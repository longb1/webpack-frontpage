import React, { useState } from 'react';
export default function FunctionComponent(){

    const [defaultVal, updateVal] = useState(4)

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