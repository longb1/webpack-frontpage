import React from 'react';
import Cards from './card.js';
import locations from '../data.js'

export default function Container(){
    const proponents = locations.map(item=>{
        
        return(
            <Cards item={item}/>
        )
    })

    return(
        <div id="container">
            {proponents}
        </div>
    );
}