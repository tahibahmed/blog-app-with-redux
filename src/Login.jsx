import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginapi } from './redux/Loginslice'



const Login = () => {

    const [users, setusers] = useState({})

    const dispatch = useDispatch()

    const getdtaa = (e) => {
        setusers({ ...users, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(loginapi(users))
        console.log(users)
    }
    return (
        <div>
            <section class="sec-1">
                <div class="container">
                    <div class="row h-fitcontent justify-content-center">
                        <div class="col-4">
                            <form onSubmit={handlesubmit}>
                                <label for="email_input"></label>
                                <input type="text" name='email' onChange={getdtaa} class="form-control" id="email_input" placeholder="Enteryour Email" />

                                <input type="password" name='password' onChange={getdtaa} class="form-control" id="password_input" placeholder="Enter your Password" />
                                <button class="btn btn-primary mt-3" id="submit_button" type="submit">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login