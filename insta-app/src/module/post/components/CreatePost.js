import React from 'react'
import CustomForm from '../../auth/Containers/CustomForm'

export default function CreatePost(props) {
    return (
        <CustomForm create_post={props.create_post}/>
    )
}
