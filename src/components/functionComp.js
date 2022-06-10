import React from 'react';
export default function FunctionComponent(props){
    const click=useState("GeeksForGeeks")

    return(
        <div style={{border: "2px dashed blue"}}>
            <h1>Welcome to {click}</h1>
        </div>
    );
}