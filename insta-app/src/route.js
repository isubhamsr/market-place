import React from 'react'
import { Route } from 'react-router-dom'
import CustomForm from './module/auth/Containers/CustomForm'
import CustomHome from './module/home/Container/CustomHome'
import CustomProfile from './module/profile/container/CustomProfile'
import CustomPost from './module/post/container/CustomPost'
import CustomUserDetailsPage from './module/UserDetails/container/CustomUserDetailsPage'

export default function BaseRoute() {

    return (
        <div>
            <Route exact path="/" component={() => (<CustomHome page="home" />)} />
            <Route exact path="/followingpost" component={() => (<CustomHome page="followuser" />)} />
            <Route path="/signin" component={() => (<CustomForm page="signin" />)} />
            <Route path="/signup" component={() => (<CustomForm page="signup" />)} />
            <Route path="/profile/:username" component={CustomProfile} />
            <Route path="/edit" component={CustomUserDetailsPage} />
            <Route path="/create" component={CustomPost} />
        </div>
    )
}
