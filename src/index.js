import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import NavBar from "./components/navbar.js";
import Container from "./components/container.js";

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
   
    <div>
        <NavBar/>
        <section>
            <Container/>
        </section>
        
    </div>   
   
)