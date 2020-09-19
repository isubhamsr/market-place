import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'
import ShowMoreText from 'react-show-more-text';
import { Link } from 'react-router-dom'
import PostCard from '../../../Reuseable/PostCard';
import Storage from '../../../utility/Storage'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function HomeCard(props) {

  const [allPosts, setAllPosts] = useState([])
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)
  const [userId, setUserId] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(10)

  useEffect(() => {
    if (props.token !== null) {
      getResponse()
    }
  })

  const getResponse = async () => {
    const response = await HttpClient.get('fetchallpost');
    const result = Storage.decodeToken('token')
    setUserId(result.user_id)
    if (response.error === true) {
      setError(true)
      setMessage(response.message)
    } else {
      // response.posts.reverse()
      setAllPosts(response.posts)
    }
  }


  // allPosts.map((item) => (
  //   <PostCard userName={item.posted_by.username} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes}/>
  // ))
  return (
    <React.Fragment>
      {error === false ?
        allPosts.length === 0 ?
          <div class="loader"></div>
          :
          allPosts.map((item) => (
    <PostCard userName={item.posted_by.username} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes}/>
  ))
        : <p style={{ 'marginTop': '15%' }}>{message}</p>
      }
    </React.Fragment>
  )
}
