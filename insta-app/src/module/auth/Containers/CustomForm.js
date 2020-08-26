import React from 'react'
import Form from '../Components/Form'

export default function CustomForm(props) {
    console.log(props);
    return (
        <Form page={props.page} create_post={props.create_post}/>
    )
}
