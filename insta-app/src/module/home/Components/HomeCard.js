import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom'
import PostCard from '../../../Reuseable/PostCard';

export default function HomeCard(props) {

  const [allPosts, setAllPosts] = useState([])
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    if (props.token !== null && props.post === undefined) {

      getResponse()
    }
  })

  const getResponse = async () => {
    const response = await HttpClient.get('fetchallpost');
    const decodeToken = JSON.parse(atob(props.token.split('.')[1]));
      setUserId(decodeToken.user_id)
    if (response.error === true) {
      setError(true)
      setMessage(response.message)
    } else {
      response.posts.reverse()
      setAllPosts(response.posts)
    }
  }

  return (
    <React.Fragment>
      {error === false ?
        allPosts.length === 0 ?
          <div class="loader"></div>
          :
          allPosts.map((item) => (
            <PostCard userName={item.posted_by.username} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes}/>
          ))
        : <p style={{'marginTop' : '15%'}}>{message}</p>
      }
    </React.Fragment>
  )
}
