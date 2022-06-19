import React from 'react';

export default function NavBar(){
    const [darkTheme, setDarkTheme] = React.useState(false)

    function handleChange(){
        setDarkTheme(prevState => !prevState)

    }

    return(
        <nav>
            <h1>My travel journal</h1>

            <label class="switch">
                <input 
                    type="checkbox"
                    checked={darkTheme}
                    onChange={handleChange}
                />
                <span class="slider"></span>
            </label>
        </nav>
    );
}