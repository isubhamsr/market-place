import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLayout(props) {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <span class="navbar-brand mb-0 h1">Navbar</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/signin">Sign In</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main class="flex-shrink-0">
                <div class="container">
                    {props.children}
                </div>
            </main>

            <footer class="footer mt-auto py-3 bg-light">
                <div class="container">
                    <span class="text-muted">Place sticky footer content here.</span>
                </div>
            </footer>
        </React.Fragment>
    )
}
