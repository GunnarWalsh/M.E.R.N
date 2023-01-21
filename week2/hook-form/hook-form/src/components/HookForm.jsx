import React, { useState } from "react";

const HookForm = (props) => {

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChangeHandler = (e) => {
        setUser(prevState => {return {...prevState, [e.target.name]: e.target.value}})
        // console.log(e)
        // console.log(e.target.value)
        // console.log(e.target.name)

    }
    return(
        <div>
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>

                <label htmlFor="lastName" >Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>

                <label htmlFor="email" >Email: </label>
                <input type="email" name="email" onChange={onChangeHandler}/>

                <label htmlFor="password" >Password: </label>
                <input type="password" name="password" onChange={onChangeHandler}/>

                <label htmlFor="confirmPassword" >Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
            </form>

            <p>First name: <br/> {user.firstName}</p>
            <p>Last Name: <br/> {user.lastName}</p>
            <p>Email: <br/>{user.email}</p>
            <p>Password: <br/>{user.password}</p>
            <p>Confirm Password: <br/>{user.confirmPassword}</p>
        </div>
    )
}

export default HookForm;