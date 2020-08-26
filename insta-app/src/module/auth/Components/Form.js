import React, { useState, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import axios from 'axios'

export default function Form(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [token, setToken] = useState(null)
    const [redirect, setRedirect] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token != null){
            setIsLogin(true)
        }
    })

    const signup = () => {

        try {
            const data = {}

            data.name = name
            data.email = email
            data.password = password
            data.username = username

            // console.log(data);

            try {
                axios.post('http://localhost:3001/api/v1/signup', data, { validateStatus: false })
                    .then(function (response) {
                        // console.log(response);
                        if (response.data.error === false) {
                            setMessage(response.data.message)
                            setError(response.data.error)
                        } else {
                            setMessage(response.data.message)
                            setError(response.data.error)
                        }
                    })
                    .catch(function (error) {
                        setError(true)
                        setMessage("Internal Server Error. Please Try Again")
                    });
            } catch (error) {
                setError(true)
                setMessage("Internal Server Error. Please Try Again")
            }

        } catch (error) {
            setError(true)
            setMessage("Internal Server Error. Please Try Again")
        }
    }

    const createpost = () => {
        const data = {}

        data.description = description

        console.log(data);

    }

    const login = () => {

        try {
            const data = {}

            data.password = password
            data.username = username

            // console.log(data);

            // console.log(data);

            try {
                axios.post('http://localhost:3001/api/v1/signin', data, { validateStatus: false })
                    .then(function (response) {
                        // console.log(response);
                        if (response.data.error === false) {
                            setMessage(response.data.message)
                            setError(response.data.error)
                            const token = response.data.token
                            localStorage.setItem('token', token)
                            setRedirect(true)
                        } else {
                            setMessage(response.data.message)
                            setError(response.data.error)
                        }
                    })
                    .catch(function (error) {
                        setError(true)
                        setMessage(error.message)
                    });
            } catch (error) {
                setError(true)
                setMessage(error.message)
            }

        } catch (error) {
            setError(true)
            setMessage(error.message)
        }
    }

    if(redirect){
        return (<Redirect to='/'/>)
    }

    if(isLogin){
        return (<Redirect to='/'/>)
    }

    return (
        <section className="auth-card">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        {
                            props.page === "signup" ? "Register" : props.page === "signin" ? "Login" : null
                        }
                        {
                            props.create_post === "createpost" ? "Create Post" : null
                        }
                    </h5>
                    <hr />
                    {
                        message != null ?
                            <p>{message}</p>
                            : null
                    }
                    {
                        props.page === "signup" ?
                            <React.Fragment>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </React.Fragment>
                            :
                            null
                    }

                    {
                        props.create_post === "createpost" ?
                            <React.Fragment>
                                <div class="form-file mb-3">
                                    <input type="file" class="form-file-input" id="customFile" />
                                    <label class="form-file-label" for="customFile">
                                        <span class="form-file-text">Upload Photo</span>
                                        <span class="form-file-button">Browse</span>
                                    </label>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                            </React.Fragment>
                            : null
                    }

                    {
                        props.page === "signin" || props.page === "signup" ?
                            <React.Fragment>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Username</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword2" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </React.Fragment>
                            : null
                    }
                    {
                        props.page === "signup" || props.create_post === "createpost" ?
                            <button href="#" class="btn btn-primary" onClick={props.page === "signup" ? signup : props.create_post === "createpost" ? createpost : null}>
                                {props.create_post === "createpost" ? "Upload" : "Register"}
                            </button>
                            :
                            props.page === "signin" ?
                                <React.Fragment>
                                    <button href="#" class="btn btn-primary" onClick={login}>Login</button>
                                    <p>haven't any account? <NavLink to='/signup'>Register</NavLink> </p>
                                </React.Fragment>
                                : null
                    }
                </div>
            </div>
        </section>
    )
}
