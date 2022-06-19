import React from 'react';

export default function Cards(props){

    return(
        <div className="card" >
            <img src={`${props.item.imageUrl}`} className="card-image" />
            <div className="location-info">
                <p>{props.item.location} <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a></p>
                <h1>{props.item.title}</h1>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    );
}