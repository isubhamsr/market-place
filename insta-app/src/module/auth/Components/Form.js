import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { GlobalContext } from '../../../context/Provider'
import { USER_SIGNIN, USER_SIGNUP } from '../../../context/reducers/actions/ActionTypes'
import HttpClient from '../../../utility/HttpClient'
import Storage from '../../../utility/Storage'
import axios from 'axios'

export default function Form(props) {
    const { state, dispatch, signupState, signupdispatch } = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [token, setToken] = useState(null)
    const [redirectHome, setRedirectHome] = useState(false)
    const [redirectLogin, setRedirectLogin] = useState(false)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token != null) {
            setIsLogin(true)
        }
    })

    const signup = async () => {

        try {
            const data = {}

            data.name = name
            data.email = email
            data.password = password
            data.username = username

            // console.log(data);

            try {
                // axios.post('http://localhost:3001/api/v1/signup', data, { validateStatus: false })
                    // .then(function (response) {
                    //     // console.log(response);
                    //     if (response.data.error === false) {
                    //         setMessage(response.data.message)
                    //         setError(response.data.error)
                    //         setRedirectLogin(true)
                    //         signupdispatch({ type: USER_SIGNUP, payload: "Signup" })
                    //     } else {
                    //         setMessage(response.data.message)
                    //         setError(response.data.error)
                    //     }
                    // })
                //     .catch(function (error) {
                //         setError(true)
                //         setMessage("Internal Server Error. Please Try Again")
                //     });

                const response = await HttpClient.post('signup', data);
                console.log(response);
                try {
                    if (typeof(response) == 'string') {
                        setError(true)
                        setMessage("Internal Server Error. Please Try Again")
                    }
                    if (response.error === false) {
                        setMessage(response.message)
                        setError(response.error)
                        setRedirectLogin(true)
                        signupdispatch({ type: USER_SIGNUP, payload: "Signup" })
                    } else {
                        setMessage(response.message)
                        setError(response.error)
                    }
                } catch (error) {
                    setError(true)
                    setMessage("Internal Server Error. Please Try Again")
                }

            } catch (error) {
                setError(true)
                setMessage("Internal Server Error. Please Try Again")
            }

        } catch (error) {
            setError(true)
            setMessage("Internal Server Error. Please Try Again")
        }
    }

    const login = async () => {

        try {
            const data = {}

            data.password = password
            data.username = username

            // console.log(data);

            // console.log(data);

            try {
                // axios.post('http://localhost:3001/api/v1/signin', data, { validateStatus: false })
                //     .then(function (response) {
                //         // console.log(response);
                //         if (response.data.error === false) {
                //             setMessage(response.data.message)
                //             setError(response.data.error)
                //             const token = response.data.token
                //             localStorage.setItem('token', token)
                //             setRedirectHome(true)
                //             dispatch({type:USER_SIGNIN, payload: response.data.token})
                //         } else {
                //             setMessage(response.data.message)
                //             setError(response.data.error)
                //         }
                //     })
                // .catch(function (error) {
                //     setError(true)
                //     setMessage(error.message)
                // });

                const response = await HttpClient.post('signin', data);
                // console.log(response);
                try {
                    if (typeof(response) == 'string') {
                        setError(true)
                        setMessage("Internal Server Error. Please Try Again")
                    }
                    if (response.error === false) {
                        setMessage(response.message)
                        setError(response.error)
                        const token = response.token
                        // localStorage.setItem('token', token)
                        Storage.set('token', token)
                        setRedirectHome(true)
                        dispatch({ type: USER_SIGNIN, payload: response.token })
                    } else {
                        setMessage(response.message)
                        setError(response.error)
                    }
                } catch (error) {
                    setError(true)
                    setMessage(error.message)
                }


            } catch (error) {
                setError(true)
                setMessage(error.message)
            }

        } catch (error) {
            setError(true)
            setMessage(error.message)
        }
    }

    if (redirectHome) {
        return (<Redirect to='/' />)
    }

    if (isLogin) {
        return (<Redirect to='/' />)
    }

    if (redirectLogin) {
        return (<Redirect to='/signin' />)
    }

    return (
        <section className="auth-card">
            <div class="card mb-4">
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
                        message !== null ?
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
                        props.page === "signup" ?
                            <button href="#" class="btn btn-primary" onClick={signup}>
                                Register
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
