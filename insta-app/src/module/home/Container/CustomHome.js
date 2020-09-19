import React, {useEffect, useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomeCard from '../Components/HomeCard'
import Storage from '../../../utility/Storage'

export default function CustomHome(props) {

    const token = Storage.get('token')

    if(token === null){
        return (<Redirect to='/signin'/>)
    }else{
        return (<HomeCard token={token} />)
    }
}
