import React, {useEffect, useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import ProfilePage from '../components/ProfilePage'
import Storage from '../../../utility/Storage'

export default function CustomProfile() {

    const token = Storage.get('token')

    if(token === null){
        return (<Redirect to='/signin'/>)
    }else{
    return (
        <ProfilePage token={token}/>
    )
    }
}
