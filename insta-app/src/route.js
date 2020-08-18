import React from 'react'
import { Route } from 'react-router-dom'
import CustomForm from './module/auth/Containers/CustomForm'
import CustomHome from './module/home/Container/CustomHome'

export default function BaseRoute() {
    return (
        <div>
            <Route exact path="/" component={CustomHome} />
            <Route path="/signin" component={CustomForm} />
            <Route path="/signup" component={() => (<CustomForm page="signup" />)} />
        </div>
    )
}
