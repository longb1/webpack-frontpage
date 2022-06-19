import React from 'react';

export default function NavBar(){
    

    return(
        <nav>
            <h1>My travel journal</h1>

            <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
            </label>
        </nav>
    );
}