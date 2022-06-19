import React from 'react';

export default function NavBar(props){

    return(
        <nav className={props.theme ? "dark-nav" : "light-nav"}>
            <h1>My travel journal</h1>

            <label class="switch">
                <input 
                    type="checkbox"
                    checked={props.checkValue}
                    onChange={props.handleClick}
                />
                <span class="slider"></span>
            </label>
        </nav>
    );
}