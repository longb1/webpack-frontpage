import React from 'react';
export default function FunctionComponent(props){
    return(
        <div style={{border: "2px dashed blue"}}>
            <h2>Hello {props.user}</h2>
            <h3>This component is made with a function</h3>
        </div>
    );
}