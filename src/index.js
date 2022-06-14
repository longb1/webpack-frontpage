import React from "react";
import ReactDOM from "react-dom";
import FunctionComponent from "./components/functionComp.js";
import "./style.css"
import NavBar from "./components/navbar.js";

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
   
    <div >
        <NavBar/>
        <FunctionComponent/>
    </div>   
   
)