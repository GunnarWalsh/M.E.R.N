import React, { useState } from "react";

const Person = (props) => {
    
    const [age, setAge] = useState(props.age)

    const newBirthday = () => {
        setAge(age+1)
    }
    return(
        <div>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Age: {age}</p> 
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={newBirthday}>Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default Person;