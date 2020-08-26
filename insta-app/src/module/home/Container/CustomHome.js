import React, {useEffect, useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomeCard from '../Components/HomeCard'

export default function CustomHome() {

    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('token')
        // console.log(token);
        if (token === null){
            // let history = useHistory()
            setRedirect(true)
            // history.push("/signin")
        }
    }, [])

    if(redirect){
        return (<Redirect to='/signin'/>)
    }


    return (
            <HomeCard />
    )
}
