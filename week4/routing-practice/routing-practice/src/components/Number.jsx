import React from 'react';
import {useParams} from 'react-router-dom'



const Number = (props) => {
    const {word} = useParams()
    
    return (
        <div>
            {
                isNaN(word)?
                
                <h1>Word is: {word}</h1>
                :
                <h2>Number is: {word}</h2>
            }
        </div>
    );
};



export default Number;
