import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Form(props) {
    return (
        <section className="auth-card">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        {
                            props.page ? "Register" : "Login"
                        }
                    </h5>
                    <hr />
                    {
                        props.page ?
                            <React.Fragment>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Full Name" />
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Email" />
                                </div>
                            </React.Fragment>
                            :
                            null
                    }

                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Username</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Username" />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Password</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Password" />
                    </div>
                    {
                        props.page ?
                            <button href="#" class="btn btn-primary">Register</button>
                            :
                            <React.Fragment>
                                <button href="#" class="btn btn-primary">Login</button>
                                <p>haven't any account? <NavLink to='/signup'>Register</NavLink> </p>
                            </React.Fragment>
                    }
                </div>
            </div>
        </section>
    )
}
