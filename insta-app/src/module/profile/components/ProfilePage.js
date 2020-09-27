import React, { useState, useEffect } from 'react'
import HttpClient from '../../../utility/HttpClient'
import { AddAPhoto, ControlPoint } from '@material-ui/icons'
import { Redirect, Link, useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import CustomHome from '../../home/Container/CustomHome';
import HomeCard from '../../home/Components/HomeCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import PostCard from '../../../Reuseable/PostCard';
import Storage from '../../../utility/Storage'

export default function ProfilePage(props) {

    const params = useParams();
    const [posts, setPosts] = useState([])
    const [isLogin, setIsLogin] = useState(true)
    const [userName, setUserName] = useState(null)
    const [name, setName] = useState(null)
    const [userId, setUserId] = useState(null)
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(null)
    const [otherUser, setOtherUser] = useState(false)
    const [isFollow, setIsFollow] = useState(false)
    const [followRes, setFollowRes] = useState(null)
    const [unFollowRes, setUnFollowRes] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const result = Storage.decodeToken('token')

    useEffect(() => {
        if (props.token !== null) {

            getResponse()
        }
    }, [result])

    const getResponse = async () => {
        // let response = await HttpClient.get('userpost');
        let response

        // const result = Storage.decodeToken('token')
        if (result.user_username === params.username) {
            response = await HttpClient.get('userpost');
            console.log(response);
        } else {
            setOtherUser(true)
            response = await HttpClient.get(`user/${params.username}`);
        }
        // console.log(decodeToken);
        setUserName(result.user_username)
        setName(result.user_name)
        setUserId(result.user_id)
        if (response.error === true) {
            setError(true)
            setMessage(response.message)
        } else {
            // response.posts.reverse()
            if (response.user !== undefined) {
                setUser(response.user)
                if(response.user.followers.includes(result.user_id)){
                    // console.log('yes');
                    setIsFollow(true)
                }
            }
            setPosts(response.posts)
        }
    }

    const doFollow = async () => {
        setIsLoading(true)
        const data = {
            username: params.username
        }
        const response = await HttpClient.put('follow', data);
        if (response.error === true) {
            setError(true)
            setMessage(response.message)
        } else {
            setIsFollow(false)
            setFollowRes(response.data)
            setIsLoading(false)
        }
    }

    const doUnFollow = async () => {
        setIsLoading(true)
        const data = {
            username: params.username
        }
        const response = await HttpClient.put('unfollow', data);
        if (response.error === true) {
            setError(true)
            setMessage(response.message)
        } else {
            setIsFollow(false)
            setUnFollowRes(response.data)
            setIsLoading(false)
        }
    }

    return (
        <React.Fragment>
            <header>

                <div class="profile-header-container">

                    <div class="profile">

                        <div class="profile-image">

                            <img src="http://res.cloudinary.com/dkcwzsz7t/image/upload/v1598457071/kcukgc0e3m06phtg6lji.jpg" alt="" />

                        </div>

                        <div class="profile-user-settings">

                            <h1 class="profile-user-name">{user !== null ? user.username : userName}</h1>
                            {
                                otherUser !== true ?
                                    <>
                                        <button class="btn profile-edit-btn">Edit Profile</button>

                                        <button class="btn profile-settings-btn" aria-label="profile settings">
                                            <Link to='/create'><ControlPoint /></Link>
                                        </button>
                                    </>
                                    :
                                    isLoading !== true ?
                                    <button class={followRes!== null || isFollow === true? "btn btn-light profile-edit-btn" :"btn btn-primary profile-edit-btn"} onClick={ isFollow === true ? doUnFollow : doFollow}>
                                        {isFollow === true ? 'Unfollow'
                                        :
                                            'Follow'
                                        }
                                    </button>
                                    : <CircularProgress />
                            }
                                        {/* <div class="spinner-border text-light" role="status">
                                            <span class="sr-only spinner-border text-light">Loading...</span>
                                        </div> */}

                        </div>

                        <div class="profile-stats">

                            <ul className="profile-stats-ul">
                                <li><span class="profile-stat-count">{posts.length}</span> posts</li>
                                {
                                    user !== null ?
                                        <>
                                            <li><span class="profile-stat-count">{user.followers.length}</span> followers</li>
                                            <li><span class="profile-stat-count">{user.followings.length}</span> following</li>
                                        </>
                                        : 
                                        <>
                                            <li><span class="profile-stat-count">{posts.length !== 0 ? posts[0].posted_by.followers.length : "0"}</span> followers</li>
                                            <li><span class="profile-stat-count">{posts.length !== 0 ? posts[0].posted_by.followings.length : "0"}</span> following</li>
                                        </>
                                }

                            </ul>

                        </div>

                        <div class="profile-bio">

                            <p><span class="profile-real-name">{user !== null ? user.name : name}</span></p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                            </p>

                        </div>

                    </div>

                </div>

            </header>

            <section >
                {error === false ?
                    posts.length === 0 ?
                        <div class="loader"></div>
                        :
                        posts.map((item) => (
                            <PostCard userName={user !== null ? user.username : userName} post_image={item.post_image} post_description={item.post_description} postId={item._id} userId={userId} likes={item.likes} comments={item.comments} />
                        ))
                    : <p>{message}</p>
                }
            </section>
        </React.Fragment>
    )
}
