import React from 'react';
import Cards from './card.js';
import locations from '../data.js'

export default function Container(props){
    const proponents = locations.map(item=>{
        
        return(
            <Cards item={item}/>
        )
    })

    return(
        <div className={props.theme ? "dark-bg" : "light-bg"} id="container">
            {proponents}
        </div>
        
    );
}