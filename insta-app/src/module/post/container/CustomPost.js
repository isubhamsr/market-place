import React from 'react'
import CreatePost from '../components/CreatePost'

export default function CustomPost(props) {
    return (
        <CreatePost create_post={props.create_post}/>
    )
}
