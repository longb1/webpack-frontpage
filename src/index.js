import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.js';
import FunctionComponent from "./components/functionComp.js";
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
   
    <div >
        <App title="poop"/>
        <FunctionComponent user="john" />
    </div>   
   
)