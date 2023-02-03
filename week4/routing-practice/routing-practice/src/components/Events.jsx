import React from 'react';
import {useParams} from 'react-router-dom'

const Events = () => {
    const {events, font, background} = useParams()
    return (
        <div>
            <h1 style={
                {background: background,
                color: font}
            }>The word is: {events}</h1>
        </div>
    );
};


export default Events;
