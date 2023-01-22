import React , { useState } from "react";

const Forms = (props) => {

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChangeHandler = (e) => {
        setUser(prevState => {return {...prevState, [e.target.name]: e.target.value}})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`User: ${JSON.stringify(user)}`)
    }

    // Have you ever used emojis in your code? 

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                {
                    user.firstName.length < 2 ?
                    <p>First name must be 2 or more characters</p>:
                    null
                }
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                {
                    user.lastName.length < 2 ?
                    <p>Last name must be 2 or more characters</p>:
                    null
                }
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                {
                    user.email.length < 5 ?
                    <p>Email must be 5 or more characters</p>:
                    null
                }
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                {
                    user.password.length < 8 ?
                    <p>Password must be 8 or more characters</p>:
                    null
                }
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                {
                    user.confirmPassword !== user.password ?
                    <p>Passwords must match</p>:
                    null
                }
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Forms;