import React from "react"
import NavBar from "./components/navbar.js";
import Container from "./components/container.js";
import Form from "./components/form.js";

export default function Main(){
    const [darkTheme, setDarkTheme] = React.useState(false)

    function handleChange(){
        setDarkTheme(prevState => !prevState)

    }

    return(
        <div>
            <NavBar/>
            <Container/>
            <Form/>
        </div>   
    )
}